import React from "react";
import styles from "./PrivacePolicy.module.scss";

import Main from "@/components/Main";

import HeadingFrame from "@/components/UI/HeadingFrame";
import LocalizedStrings from "react-localization";
import { useParams } from "react-router-dom";

const PrivacePolicy = () => {
   const { lang } = useParams();

   return (
      <Main>
         <div className={styles.header}>
            <HeadingFrame glare={false}>
               {lang === "ru" ? (
                  <>
                     Политика
                     <br />
                     конфиденциальности
                  </>
               ) : (
                  <>Privacy Policy</>
               )}
            </HeadingFrame>
         </div>
         <div className={styles.content}>
            {lang == "en" ? (
               <>
                  <p>
                     Welcome to our website! By accessing and using our
                     services, you accept and agree to be bound by the following
                     terms and conditions. Please read them carefully.
                  </p>
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                     By accessing and using our website, you accept and agree to
                     be bound by these Terms of Use. If you do not agree to
                     these Terms, please do not use our services.
                  </p>
                  <p>
                     Welcome to our website! By accessing and using our
                     services, you accept and agree to be bound by the following
                     terms and conditions. Please read them carefully.
                  </p>
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                     By accessing and using our website, you accept and agree to
                     be bound by these Terms of Use. If you do not agree to
                     these Terms, please do not use our services.
                  </p>
                  <p>
                     Welcome to our website! By accessing and using our
                     services, you accept and agree to be bound by the following
                     terms and conditions. Please read them carefully.
                  </p>
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                     By accessing and using our website, you accept and agree to
                     be bound by these Terms of Use. If you do not agree to
                     these Terms, please do not use our services.
                  </p>
               </>
            ) : (
               <>
                  <p>
                     Добро пожаловать на наш веб-сайт! Получая доступ к нашим
                     услугам и используя их, вы принимаете и соглашаетесь
                     соблюдать следующие положения и условия. Пожалуйста,
                     прочтите их внимательно.
                  </p>
                  <h2>1. Принятие Условий</h2>
                  <p>
                     Заходя на наш веб-сайт и используя его, вы принимаете и
                     соглашаетесь соблюдать настоящие Условия использования.
                     Если вы не согласны с настоящими Условиями, пожалуйста, не
                     пользуйтесь нашими услугами.
                  </p>
                  <p>
                     Добро пожаловать на наш веб-сайт! Получая доступ к нашим
                     услугам и используя их, вы принимаете и соглашаетесь
                     соблюдать следующие положения и условия. Пожалуйста,
                     прочтите их внимательно.
                  </p>
                  <h2>1. Принятие Условий</h2>
                  <p>
                     Заходя на наш веб-сайт и используя его, вы принимаете и
                     соглашаетесь соблюдать настоящие Условия использования.
                     Если вы не согласны с настоящими Условиями, пожалуйста, не
                     пользуйтесь нашими услугами.
                  </p>
                  <p>
                     Добро пожаловать на наш веб-сайт! Получая доступ к нашим
                     услугам и используя их, вы принимаете и соглашаетесь
                     соблюдать следующие положения и условия. Пожалуйста,
                     прочтите их внимательно.
                  </p>
                  <h2>1. Принятие Условий</h2>
                  <p>
                     Заходя на наш веб-сайт и используя его, вы принимаете и
                     соглашаетесь соблюдать настоящие Условия использования.
                     Если вы не согласны с настоящими Условиями, пожалуйста, не
                     пользуйтесь нашими услугами.
                  </p>
               </>
            )}
         </div>
      </Main>
   );
};

export default PrivacePolicy;
