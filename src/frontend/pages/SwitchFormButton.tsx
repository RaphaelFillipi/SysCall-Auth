import { useState } from "react";
import { ButtonTitleAuth } from "../components/Form/ButtonTitle/ButtonTitleAuth";
import { RegisterUser } from "./RegisterUser";
import { LoginUser } from "./LoginUser";
import { AnimatePresence, motion } from "framer-motion";
import logoVertical from "../assets/logo-vertical.svg";
import imgBg from "../assets/image-bg.svg";
import { Variants } from "framer-motion";

export function SwitchFormButton() {
  const [formState, setFormState] = useState<boolean>(false);


  //Propriedades de animação
  const animationVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-full h-auto p-6 flex justify-center items-start sm:justify-center md:w-auto">
        <img
          src={logoVertical}
          alt="Logo SysCall"
          className="max-h-[95px] max-w-[90px] lg:max-h-[75px] lg:max-w-[70px]"
        />
      </div>
      <div className="flex px-8 pb-4 justify-center items-center flex-grow lg:justify-start md:p-4 2xl:justify-center">
        <div className="bg-green-light rounded-[12px] w-full sm:max-w-[480px] md:max-w-[400px] lg:max-w-[360px] xl:max-w-[400px]">
          <div className="flex flex-row w-full pb-8 rounded-[12px] overflow-hidden lg:pb-4">
            <ButtonTitleAuth
              title="Cadastro"
              onClick={() => {
                setFormState(false);
              }}
              active={!formState}
              className={"rounded-br-lg"}
            />
            <ButtonTitleAuth
              title="Login"
              onClick={() => {
                setFormState(true);
              }}
              active={formState}
              className={"rounded-bl-lg"}
            />
          </div>
          <AnimatePresence mode="wait">
            {formState === true ? (
              <motion.div
                key="login"
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <LoginUser />
              </motion.div>
            ) : (
              <motion.div
                key="register"
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <RegisterUser />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="lg:w-1/2 lg:flex lg:items-start lg:justify-center lg:max-h-screen lg:px-10 lg:pt-[35px] xl:items-center xl:pt-[0px]">
        <img
          src={imgBg}
          alt="Pessoas"
          className="h-[0px] w-[0px] lg:w-full lg:h-auto xl:w-full xl:max-h-screen"
        />
      </div>
    </div>
  );
}
