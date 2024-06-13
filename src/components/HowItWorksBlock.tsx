import { FunctionComponent } from "react";

export type HowItWorksBlockType = {
  className?: string;
};

const HowItWorksBlock: FunctionComponent<HowItWorksBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[3678px] left-[99px] w-[1762px] h-[1799px] text-left text-161xl text-black font-cygre ${className}`}
    >
      <b className="absolute top-[0px] left-[1px] tracking-[-0.4px] leading-[100%] uppercase flex items-center w-[1140px]">
        как это работает
      </b>
      <div className="absolute top-[419px] left-[290px] w-[1472px] h-[1380px] overflow-hidden text-41xl text-[transparent]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] w-[560px] h-[690px]">
          <b className="absolute w-[calc(100%_-_102px)] top-[550px] left-[40px] tracking-[-0.4px] leading-[100%] inline-block [backdrop-filter:blur(200px)] [-webkit-text-stroke:5px_#fff]">
            СБОР ДАННЫХ
          </b>
          <div className="absolute w-[calc(100%_-_56.7px)] top-[135px] left-[40px] text-6xl tracking-[-0.4px] leading-[100%] font-cygre-book text-white flex items-center h-[375px]">
            <span className="w-full">
              <p className="m-0">
                Устройства на стройке собирают информацию о работе техники и
                сотрудников. Они фиксируют сколько времени оборудование
                используется и где оно находится. Устройства также отслеживают
                состояние техники, чтобы выявлять признаки износа или
                необходимости ремонта.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Дополнительно они фиксируют выполнение задач сотрудниками и
                соблюдение ими правил безопасности. Все эти данные собираются в
                реальном времени и передаются в систему для дальнейшего анализа.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute top-[690px] right-[622px] rounded-tl-11xl rounded-tr-81xl rounded-br-11xl rounded-bl-81xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] w-[560px] h-[690px]">
          <b className="absolute w-[calc(100%_-_185px)] top-[40px] left-[40px] tracking-[-0.4px] leading-[100%] flex items-center [backdrop-filter:blur(200px)] [-webkit-text-stroke:5px_#fff]">
            АНАЛИЗ ДАННЫХ
          </b>
          <div className="absolute top-[200px] left-[40px] text-6xl tracking-[-0.4px] leading-[100%] font-cygre-book text-white [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:13] [-webkit-box-orient:vertical] w-[503px]">
            <span className="w-full">
              <p className="m-0">
                Собранные данные поступают в систему, где они обрабатываются с
                помощью алгоритмов машинного обучения. Они анализируют данные
                для выявления закономерностей и потенциальных проблем.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Система может определить, какие участки работы требуют внимания
                или какие процессы можно улучшить. Анализ также включает
                сравнение текущих данных с плановыми показателями для выявления
                отклонений.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute top-[0px] right-[311px] rounded-tl-11xl rounded-tr-81xl rounded-br-11xl rounded-bl-81xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] w-[580px] h-[690px] text-6xl text-white font-cygre-book">
          <div className="absolute top-[170px] left-[40px] tracking-[-0.4px] leading-[100%] [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:14] [-webkit-box-orient:vertical] w-[503px]">
            <span className="w-full">
              <p className="m-0">{`Все данные и результаты анализа отображаются на интерактивной панели управления — здесть есть текущие данные о работе техники и сотрудников, статус выполнения задач и соблюдение мер безопасности. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Панель позволяет быстро оценить общую ситуацию на стройке и
                выявить любые отклонения от плана. Визуализация помогает
                руководителям следить за соблюдением мер безопасности и
                эксплуатацией оборудования.
              </p>
            </span>
          </div>
          <b className="absolute w-[calc(100%_-_77px)] top-[40px] left-[40px] text-41xl tracking-[-0.4px] leading-[100%] flex font-cygre text-[transparent] items-center [backdrop-filter:blur(200px)] [-webkit-text-stroke:5px_#fff]">
            ВИЗУАЛИЗАЦИЯ ДАННЫХ
          </b>
        </div>
        <div className="absolute top-[690px] right-[0px] w-[601px] h-[690px]">
          <div className="absolute top-[0px] left-[0px] w-[601px] h-[690px] overflow-hidden">
            <div className="absolute w-[calc(100%_-_41px)] top-[0px] right-[41px] left-[0px] rounded-tl-81xl rounded-tr-11xl rounded-br-81xl rounded-bl-11xl [background:linear-gradient(90deg,_#6053f8,_#b3619e)] h-[690px]" />
          </div>
          <div className="absolute top-[112px] left-[40px] w-[561px] h-[498px] overflow-hidden">
            <div className="absolute top-[378px] left-[0px] w-[561px] h-[120px] overflow-hidden">
              <b className="absolute w-full top-[0px] left-[0px] tracking-[-0.4px] leading-[100%] flex items-center [backdrop-filter:blur(200px)] [-webkit-text-stroke:5px_#fff]">
                ПРОГНОЗИРОВАНИЕ ПРОБЛЕМ
              </b>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[561px] h-[338px] overflow-hidden text-6xl text-white font-cygre-book">
              <div className="absolute top-[0px] left-[0px] tracking-[-0.4px] leading-[100%] [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:13] [-webkit-box-orient:vertical] w-[503px]">
                <span className="w-full">
                  <p className="m-0">
                    Система предсказывает возможные проблемы — перегрузка
                    техники, износ оборудования или недостаток ресурсов — и
                    помогает предотвратить их, чтобы обеспечить бесперебойную
                    работу стройплощадки.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Эти прогнозы позволяют управляющим заранее принимать меры
                    для предотвращения проблем. В результате можно избежать
                    простоев и аварий, обеспечивая бесперебойную работу стройки.
                  </p>
                  <p className="m-0">&nbsp;</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksBlock;
