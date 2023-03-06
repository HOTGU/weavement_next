import Radio from "@/components/config/Radio";

export default function Page() {
  return (
    <div className="default-container">
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4 pt-6 pb-8 md:pt-8 md:pb-11 lg:pt-10 lg:pb-14">
        <div className="font-bold font-racingSans text-4xl md:text-6xl lg:text-8xl">
          Contact
        </div>
        <div className="font-bold text-xs md:text-sm text-center">
          감각적인 제조가 필요하신가요?
          <br />
          컨텐츠의 크기도, 목적도, 소재도 제약이 없습니다. 편안한 마음으로
          문의해주세요!
        </div>
      </div>
      <form
        action="/api/contact"
        method="post"
        className="w-full h-full py-20 bg-secondary-color rounded-md"
      >
        <div className=" max-w-4xl mx-auto px-4">
          <div className="form-column">
            <h3 className="form-head">어떤 단계인가요? *</h3>
            <div className="form-body">
              <Radio name="step" value="기획" label="기획 및 예산 편성 단계" />
              <Radio name="step" value="디자인" label="디자인 및 설계 단계" />
              <Radio name="step" id="step3" value="제작" label="제작 단계" />
            </div>
          </div>
          <div className="form-column">
            <h3 className="form-head">
              디자인이나 설계 도면이 준비되셨나요? *
            </h3>
            <div className="form-body">
              <Radio name="hasDesign" value="2D" label="2D디자인" />
              <Radio name="hasDesign" value="3D" label="3D디자인" />
              <Radio name="hasDesign" value="도면" label="도면" />
              <Radio name="hasDesign" value="없음" label="아니오" />
            </div>
          </div>
          <div className="form-column">
            <div className="form-head">예산과 일정이 정해져계신가요?</div>
            <div className="form-body">
              <div className="w-1/2">
                <select name="cost" required className="form-item">
                  <option value="">예산을 선택해주세요 *</option>
                  <option value="100만원이하">100만원 이하</option>
                  <option value="300만원이하">100~300만원</option>
                  <option value="500만원이하">300~500만원</option>
                  <option value="1000만원이하">500~1000만원</option>
                  <option value="2000만원이하">1000~2000만원</option>
                  <option value="5000만원이하">2000~5000만원</option>
                  <option value="1억원이하">5000만원~1억원</option>
                  <option value="1억원이상">1억원이상</option>
                  <option value="미정">미정</option>
                </select>
              </div>
              <div className="w-1/2">
                <select name="schedule" required className="form-item">
                  <option value="">일정을 선택해주세요 *</option>
                  <option value="1개월내">시급해요! (1개월 내 완료)</option>
                  <option value="3개월내">3개월 내 완료</option>
                  <option value="3개월이상">3개월 이상</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-column">
            <div className="form-head">내용을 말씀해주시겠어요? *</div>
            <p className="text-sm">
              🫠 컨텐츠(ex. 캐릭터, 글자 등)와 제작 목적, 설치 현장 등에 대해
              자세히 기입해주시면 보다 구체적인 상담이 가능합니다.
            </p>
            <textarea
              name="description"
              placeholder="프로젝트 내용을 자세히 기입하세요 *"
              className="form-item min-h-[12rem]"
            />
            <div className="text-sm">
              🫠 제작에 참고할 디자인, 도면, 이미지 사진 파일을 첨부해주세요.
              (선택)
            </div>
            <input
              className="text-sm text-gray-500 file:py-2 file:px-4 file:bg-secondary-color file:border-none  file:rounded-lg cursor-pointer file:cursor-pointer"
              type="file"
              name="images"
              multiple
            />
          </div>
          <div className="form-column">
            <div className="form-head">
              감사합니다!
              <br />
              아래정보로 회신드리겠습니다
            </div>
            <div className="form-body mb-4">
              <input
                name="clientCompany"
                placeholder="기업(기관)명 *"
                className="form-item"
                required
              />
              <div className="form-item border-none"></div>
            </div>

            <div className="form-body mb-4">
              <input
                name="clientName"
                placeholder="성함 *"
                className="form-item"
                required
              />
              <input
                name="clientPosition"
                placeholder="직책"
                className="form-item"
              />
            </div>
            <div className="form-body mb-4">
              <div className="w-1/2">
                <input
                  type="email"
                  name="clientEmail"
                  placeholder="이메일 *"
                  className="form-item"
                  required
                />
              </div>

              <div className="w-1/2">
                <div className="flex gap-2 ">
                  <input
                    name="clientStartPhone"
                    placeholder="연락처 앞번호*"
                    className="form-item"
                    maxLength={3}
                    pattern="[0-9]*"
                    title="숫자만 입력해주세요"
                    required
                  />
                  <input
                    name="clientMiddlePhone"
                    placeholder="중간번호*"
                    className="form-item"
                    maxLength={4}
                    pattern="[0-9]*"
                    title="숫자만 입력해주세요"
                    required
                  />
                  <input
                    name="clientEndPhone"
                    placeholder="뒷번호*"
                    className="form-item"
                    maxLength={4}
                    pattern="[0-9]*"
                    title="숫자만 입력해주세요"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <input
                name="clientRequest"
                className="form-item"
                placeholder="기타 요청사항(선택) 예) 연락처 내 개인 회선번호는 '04번'입니다."
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-head">
              위브먼트를 알게 된 경로를 선택해주세요 *
            </div>
            <div className="form-body">
              <Radio name="knowPlatform" value="네이버" label="네이버" />
              <Radio name="knowPlatform" value="구글" label="구글" />
              <Radio
                name="knowPlatform"
                value="인스타그램"
                label="인스타그램"
              />
              <Radio name="knowPlatform" value="페이스북" label="페이스북" />
              <Radio name="knowPlatform" value="기타" label="기타" />
              <Radio name="knowPlatform" value="지인추천" label="지인추천" />
            </div>
          </div>
          <div className="form-column">
            <div className="form-head">개인정보 수집 동의</div>
            <div className="text-sm">
              수집 항목 : 필수 (성명, 연락처 등) / 선택 (첨부파일 등)
              <br /> 수집된 정보는 문의 접수 및 회신에 이용되며 ‘전자상거래’,
              “정보통신망 이용촉진 및 정보보호” 등 관련 법령에 따라 6개월간
              보관됩니다.
              <br />
              이용자는 본 동의를 거부할 수 있으며, 미동의 시 문의 접수가
              불가합니다.
            </div>
            <div className="flex items-center  mt-4">
              <input id="check" type="checkbox" className="w-5 h-5" required />
              <label htmlFor="check" className="text-base ml-2">
                위 사항을 이해했으며 동의합니다 *
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              className="px-20  py-4 rounded-lg bg-accent-color text-white"
              value="문의하기"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
