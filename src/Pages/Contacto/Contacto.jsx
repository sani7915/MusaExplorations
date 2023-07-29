import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import naranjas from "../../images/diseño/naranjas_mod.jpg";
import emailjs from "@emailjs/browser";
import Input from "../../Componentes/FormComponent/Input";
import Textarea from "../../Componentes/FormComponent/Textarea";
import FormButton from "../../Componentes/FormComponent/FormButton";
import { useSwalContext } from "../../context/swalCotext";
import broken_pot from "../../images/diseño/broken pot.svg";
import Footer from "../../Componentes/Footer/Footer";
import { Link } from "react-router-dom";
const Contacto = () => {
  const { popUpForm } = useSwalContext();
  const [t] = useTranslation("global");
  const form = useRef();
  const [invalidName, setInvalidName] = useState(true);
  const [messageInvalid, setInvalidMessage] = useState(true);
  const [changeBtnValue, setChangeBtnValuue] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMensaje] = useState();
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [unacceptedPolicy, setUnacceptedPolicy] = useState(false);

  const getNombre = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getMensaje = (e) => {
    setMensaje(e.target.value);
  };

  useEffect(() => {
    if (name !== undefined && name.length === 0) {
      setInvalidName(false);
    } else {
      setInvalidName(true);
    }

    if (email !== undefined && email.length === 0) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }

    if (message !== undefined && message.length === 0) {
      setInvalidMessage(false);
    } else {
      setInvalidMessage(true);
    }
  }, [name, email, message]);

  const validarCampos = (e) => {
    e.preventDefault();
    if (!name) {
      setInvalidName(false);
    } else if (!email) {
      setInvalidEmail(false);
    } else if (!message) {
      setInvalidMessage(false);
    } else if (!acceptedPolicy) {
      setUnacceptedPolicy(true);
      return;
    } else {
      setChangeBtnValuue(false);
      emailjs
        .sendForm(
          "default_service",
          "template_z22mdnp",
          form.current,
          "V0UpoFvwv3OOEjbQB"
        )
        .then(
          () => {
            form.current.reset();
            setName(!name);
            setEmail(!email);
            setMensaje(!message);
            setChangeBtnValuue(true);
            popUpForm(t("popUpText.contactOk"), t("popUpText.button"));
          },
          () => {
            form.current.reset();
            setName(!name);
            setEmail(!email);
            setMensaje(!message);
            setChangeBtnValuue(true);
            popUpForm(t("popUpText.error"), t("popUpText.button"), broken_pot);
          }
        );
    }
  };

  return (
    <div>
      <main className="d-flex flex-column align-items-center justify-content-center">
        <div className="d-none d-lg-block col-md-11 col-lg-10 col-xl-9 col-xxl-8">
          <h1 className="fs-3 mt-5 mb-3 ">{t("contacto.titulo")}</h1>
        </div>
        <div className="container-fluid p-0 ">
          <img src={naranjas} alt={naranjas} className="w-100 naranjas" />
        </div>
        <div className="d-flex flex-column col-11 col-md-10 col-lg-10 col-xl-9 col-xxl-8 contacto">
          <div className="d-flex flex-column">
            <h1 className="d-lg-none">{t("contacto.titulo")}</h1>
            <p>{t("contacto.p1")}</p>
          </div>
          <div className="form_contacto col-12 ">
            <form
              ref={form}
              onSubmit={validarCampos}
              className="d-flex flex-column gap-4"
            >
              <Input
                campoInvalido={invalidName}
                valorInput={getNombre}
                name={"nombre"}
                type={"text"}
                label={t("input.LabelNombre")}
              />
              <Input
                campoInvalido={invalidEmail}
                valorInput={getEmail}
                name={"email"}
                type={"email"}
                label={t("input.LabelEmail")}
              />
              <Input
                campoInvalido={true}
                name={"telefono"}
                type={"text"}
                label={t("input.LabelTelefono")}
              />
              <Textarea
                campoInvalido={messageInvalid}
                valorInput={getMensaje}
                name={"mensaje"}
                type={"textarea"}
                label={t("input.LabelMensaje")}
              />
              <div className={`d-flex align-items-start flex-column`}>
                <div className="d-flex">
                  <input
                    className="me-1 "
                    type="checkbox"
                    name="politica-privacidad"
                    checked={acceptedPolicy}
                    onChange={(e) => setAcceptedPolicy((prev) => !prev)}
                  />
                    <p className="m-0 fs-6">
                      {t("newsLetterForm.acceptedPolitiPrivacy")}
                    </p>
                  <Link to={"/privacy-policy"} className="nav-link">
                  <p className="m-0 ms-1 fs-6">
                  {t("newsLetterForm.politicLink")}
                  </p>

                  </Link>
                </div>
                {unacceptedPolicy && !acceptedPolicy ? (
                  <p className="m-0 text-start fs-6 text-danger">
                    {t("newsLetterForm.unacceptPoliticPrivacy")}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-5">
                <FormButton
                  changeBtnValue={changeBtnValue}
                  initialValue={t("contactBtnValue.static")}
                  sendingValue={t("contactBtnValue.send")}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Contacto;
