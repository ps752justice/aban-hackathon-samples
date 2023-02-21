import useTranslation from "next-translate/useTranslation";

export const MainFooterLayout = () => {
  const { t } = useTranslation("common");

  return (
    <div className="wrapper">
      <div className="footerContainer">
        <p>{t("footer.copyright")}</p>
        <ul className="socialIcons">
          <li>
            <a href="https://www.instagram.com/1500tasvir">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#eeeded"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="https://t.me/t1500tasvir">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#eeeded"
                >
                  <path d="M21.9453125,2.7646484c-0.4393311-0.3643188-1.0431519-0.4580688-1.5722656-0.2441406L2.4560547,9.7539062c-0.788147,0.3244019-1.1640625,1.2263184-0.8396606,2.0144043c0.1677856,0.4075928,0.50177,0.723938,0.9177856,0.8693848l3.8652344,1.34375l2.0947266,6.9257812c0.0042114,0.0140991,0.0171509,0.0227051,0.022583,0.0362549c0.0216675,0.0552368,0.0533447,0.1060791,0.0933228,0.1499023c0.0148926,0.0176392,0.0311279,0.0341797,0.0484619,0.0494385c0.0521851,0.043335,0.112793,0.0753784,0.1779785,0.0940552c0.0099487,0.0029297,0.0166016,0.0117798,0.0267334,0.0140991l0.0058594-0.0002441l0.0029297,0.0012207c0.0333862,0.0074463,0.0674438,0.0110474,0.1015625,0.0107422c0.0446167-0.0015869,0.0888672-0.0092773,0.1313477-0.0228882c0.0082397-0.0022583,0.0165405-0.0016479,0.0245972-0.0043335c0.0725708-0.0255737,0.1381226-0.067627,0.1915283-0.1229248c0.0062256-0.0062256,0.015686-0.0073242,0.0216675-0.013916l3.0136719-3.3251953l4.3964844,3.4042969C17.0200195,21.3865967,17.3493652,21.500061,17.6884155,21.5c0.7333984-0.0001221,1.3664551-0.513855,1.5175781-1.2314453L22.46875,4.2509766C22.5817871,3.6968994,22.3805542,3.1256104,21.9453125,2.7646484z M9.5878906,15.2949219l-0.7072144,3.4367676l-1.4748535-4.8778076l7.3148804-3.809021l-4.9970703,4.9971313C9.654541,15.111145,9.6073608,15.1990967,9.5878906,15.2949219z M18.2265625,20.0673828c-0.0383301,0.184082-0.1696777,0.335022-0.3466797,0.3984375c-0.1729736,0.0665283-0.3682861,0.0368652-0.5136719-0.078125l-4.7636719-3.6884766c-0.2062378-0.159668-0.5006104-0.133728-0.6757812,0.0595703l-2.0956421,2.3121948l0.7059937-3.4274292l7.1884766-7.1894531c0.1953735-0.1950073,0.1956787-0.5114136,0.0006714-0.7067261c-0.1542358-0.1546021-0.3909912-0.1911011-0.5846558-0.0901489L6.7782593,13.053894l-3.9169312-1.3615112C2.6478271,11.6221313,2.5026245,11.4239502,2.5,11.1992188c-0.0103149-0.2263184,0.1236572-0.4343872,0.3339844-0.5185547l17.9140625-7.2324219c0.1871338-0.0794067,0.4030762-0.0461426,0.5576172,0.0859375c0.1538086,0.1241455,0.2244873,0.3244019,0.1826172,0.5175781L18.2265625,20.0673828z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/1500tasvir">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#eeeded"
                >
                  <path d="M8.145 21.449c-2.15 0-4.638-.552-7.39-2.097-.208-.117-.304-.364-.23-.59s.297-.375.533-.342c1.814.208 3.795-.217 5.275-1.086-1.695-.398-3.065-1.499-3.788-3.098a.499.499 0 0 1 .08-.536c.13-.148.334-.205.522-.148.218.067.435.113.644.138-1.287-.768-2.665-2.238-2.665-4.441a.5.5 0 0 1 .814-.389c.16.13.331.239.508.325a5.362 5.362 0 0 1-.869-1.817c-.332-1.282-.139-2.582.557-3.756a.501.501 0 0 1 .821-.057c1.472 1.839 4.088 4.061 8.294 4.466-.078-1.331.322-3.512 2.16-4.585 2.261-1.32 4.436-1.15 6.305.487.828-.184 2.135-.752 2.406-.941a.5.5 0 0 1 .77.538c-.125.471-.408.995-.76 1.463.279-.083.514-.167.639-.231a.5.5 0 0 1 .652.711c-.588.93-1.539 1.796-2.174 2.266.343 4.225-2.126 8.946-6.089 11.577-1.47.975-3.886 2.143-7.015 2.143zM3.15 19.406c5.351 2.195 9.403.428 11.456-.935 3.756-2.494 6.067-6.988 5.62-10.929a.498.498 0 0 1 .222-.474c.269-.177.68-.502 1.094-.905-.407.088-.802.147-1.089.148-.276-.033-.447-.169-.492-.405a.498.498 0 0 1 .306-.559c.283-.113.665-.454.995-.872-.566.219-1.178.413-1.628.478a.497.497 0 0 1-.413-.131c-1.578-1.482-3.362-1.658-5.306-.524-1.745 1.02-1.784 3.397-1.6 4.148a.499.499 0 0 1-.513.619C7.331 8.829 4.427 6.719 2.68 4.773a3.808 3.808 0 0 0-.132 2.344c.294 1.133 1.034 2.002 1.596 2.33a.5.5 0 0 1-.153.922 3.106 3.106 0 0 1-1.752-.185c.521 2.085 2.689 3.067 3.299 3.135a.501.501 0 0 1 .268.879c-.437.369-1.091.547-1.828.51.836 1.114 2.132 1.754 3.681 1.788a.5.5 0 0 1 .323.872c-1.228 1.1-2.99 1.823-4.832 2.038z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="https://fa.wikipedia.org/wiki/%D8%A7%D8%B9%D8%AA%D8%B1%D8%A7%D8%B6%D8%A7%D8%AA_%D8%A2%D8%A8%D8%A7%D9%86_%DB%B1%DB%B3%DB%B9%DB%B8_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#eeeded"
                >
                  <path d="M8.5 19.5a.5.5 0 0 1-.447-.276l-7-14a.5.5 0 0 1 .894-.448L8.5 17.882 8.941 17 3.053 5.224a.5.5 0 0 1 .894-.448l6 12c.07.141.07.307 0 .447l-1 2a.5.5 0 0 1-.447.277z" />
                  <path d="M5.503 5.503H.5a.5.5 0 0 1 0-1h5.003a.5.5 0 0 1 0 1zm11.497 0h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1z" />
                  <path d="M9.5 17.5a.5.5 0 0 1-.448-.724l6-11.997a.5.5 0 0 1 .895.447l-6 11.997a.499.499 0 0 1-.447.277z" />
                  <path d="M15 19.5a.5.5 0 0 1-.447-.276l-7-14a.5.5 0 0 1 .894-.448L15 17.882l.441-.882L9.553 5.224a.5.5 0 1 1 .894-.447l6 12c.07.141.07.307 0 .447l-1 2A.5.5 0 0 1 15 19.5z" />
                  <path d="M12.003 5.503H7a.5.5 0 0 1 0-1h5.003a.5.5 0 0 1 0 1zm11.497 0h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1z" />
                  <path d="M16 17.5a.5.5 0 0 1-.448-.724l6-11.997a.5.5 0 0 1 .895.447l-6 11.997A.499.499 0 0 1 16 17.5z" />
                </svg>
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
