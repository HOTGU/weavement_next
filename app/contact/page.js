export default function Home() {
  return (
    <div className="default-container">
      <div>감각적인 제조가 필요하신가요?</div>
      <p>
        위브먼트는 본질에 집중하여 잘 만든 제품과 전문적인 서비스를 제공합니다.
        <br />
        컨텐츠의 크기도, 목적도, 소재도 제약이 없습니다. 편안한 마음으로
        문의해주세요!
      </p>
      <form action="/api/contact" method="post">
        <input name="hello" />
      </form>
    </div>
  );
}
