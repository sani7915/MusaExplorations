import React from "react";
import img from "../../images/diseño/careto.jpg";
function BlogPortada() {
  return (
    <div>
      <div className="bg-grey pb-3 mb-5 d-block d-md-none">
        <div>
          <img src={img} alt="careto" className="blog-img-portada" />
        </div>
        <div className="px-4">
          <div className="my-3">
            <span className="fs-1 arvo">BLOG</span>
          </div>
          <div>
            <h3 className="mb-4 arvo-italic">
              Hablemos de arte, acuarela,inspiración, materiales,trucos...
            </h3>
            <div className="montserrat-italic">
              <p>
                Bienvenid@s a este rincón en el que relajarnos con una lectura
                ligera e informal a la vez que provechosa (eso espero 😉).
              </p>
              <p>
                Mi mayor motivación es que el contenidos qye comparto sirva para
                aportar un granito de arena en el maravilloso mundo de la
                acuarela y otros medios que combinan y complementan de
                maravilla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-3 d-none d-md-block ">
        <div className="py-5 col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto">
          <span className="fs-2 arvo">BLOG</span>
        </div>
        <div className="d-flex mb-5 bg-grey">
          <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto ">
            <div className="d-flex ">
              <div className="py-4 pe-sm-3 pe-lg-5">
                <h3 className="mb-4 arvo-italic">
                  Hablemos de arte, acuarela, inspiración, materiales, trucos...
                </h3>
                <div className="montserrat-italic">
                  <p>
                    Bienvenid@s a este rincón en el que relajarnos con una
                    lectura ligera e informal a la vez que provechosa (eso
                    espero 😉).
                  </p>
                  <p>
                    Mi mayor motivación es que el contenidos qye comparto sirva
                    para aportar un granito de arena en el maravilloso mundo de
                    la acuarela y otros medios que combinan y complementan de
                    maravilla.
                  </p>
                </div>
              </div>
              <div>
                <img src={img} alt="careto" className="blog-img-portada" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPortada;

// <div className="justify-content-md-start col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto">
// <div className="d-flex justify-content-end ">
//   <img src={img} alt="sandri" className="blog-img-portada" />
// </div>
// <div className=" ">
//   <div className="px-4 bg-grey ">
//     <div className="mt-3">
//       <span className="arvo fs-1 ">BLOG</span>
//     </div>
//     <div className="mt-1">
//       <div className="d-flex justify-content-between pb-4 col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto ">
//         <div className="col arvo-italic mt-3">
//           <h3 className="mb-4">
//             Hablemos de arte,acuarela,inspiración,materiales,trucos...
//           </h3>
//           <div className="montserrat-italic mb-4">
//             <p>
//               Bienvenid@s a este rincón en el que relajarnos con una
//               lectura ligera e informal a la vez que provechosa (eso
//               espero 😉).
//             </p>
//             <p>
//               Mi mayor motivación es que el contenidos qye comparto sirva
//               para aportar un granito de arena en el maravilloso mundo de
//               la acuarela y otros medios que combinan y complementan de
//               maravilla.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
