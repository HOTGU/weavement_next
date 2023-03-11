import PageTile from "@/components/config/PageTile";
import Form from "@/components/contact/Form";

export default function Page() {
  return (
    <div className="default-container">
      <PageTile
        title="Contact"
        desc={`감각적인 제조가 필요하신가요?\n컨텐츠의 크기도, 목적도, 소재도 제약이 없습니다. 편안한 마음으로 문의해주세요!`}
      />
      <Form />
    </div>
  );
}
