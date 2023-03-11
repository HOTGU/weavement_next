"use client";

import useSWR from "swr";
import React, { useEffect, useState } from "react";

const fetcher = async (...args) => {
  const [url, query] = args;
  console.log(url, query);
  const res = await fetch(`${url}?` + query);
  return res.json();
};

const ContactList = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    year: "",
    month: "",
    term: "",
    state: "",
  });
  const { data, isLoading, mutate } = useSWR(
    ["/api/contact", query],
    ([url, query]) => fetcher(url, query)
  );

  useEffect(() => {
    let queryString = "";
    if (filter.year) queryString += `year=${year}&`;
    if (filter.month) queryString += `month=${month}&`;
    if (filter.term) queryString += `term=${term}&`;
    if (filter.state) queryString += `state=${state}`;
    setQuery(queryString);
  }, [filter]);

  if (isLoading) return <>loading..</>;

  return (
    <div className="flex flex-col">
      <div onClick={() => mutate()}>새로고침</div>
      {data &&
        data?.map((contact) => {
          return <div key={contact._id}>{contact.clientCompany}</div>;
        })}
    </div>
  );
};

export default ContactList;
