import React from "react";
import styles from "./TermsOfUse.module.scss";

import Main from "@/components/Main";
import Section from "@/components/Section";

import bg from "@assets/slides/1.png";
import HeadingFrame from "@/components/UI/HeadingFrame";
import LocalizedStrings from "react-localization";
import { useParams } from "react-router-dom";

const strings = new LocalizedStrings({
   en: {
      title: "Terms of Use",
   },
   ru: {
      title: "Условия использования",
   },
});

const TermsOfUse = () => {
   const { lang } = useParams();
   strings.setLanguage(lang);

   return (
      <Main>
         <div className={styles.content}>
            <HeadingFrame glare={false}>{strings.title}</HeadingFrame>
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

export default TermsOfUse;
