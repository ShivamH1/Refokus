import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../../public/videos/arqitel.webm";
import ttr from "../../public/videos/ttr.webm";
import yir from "../../public/videos/yir.webm";
import yahoo from "../../public/videos/yahoo.webm";
import rainfall from "../../public/videos/rainfall.mp4";
import layoutland from  "../../public/videos/layoutland.mp4";
import cula from "../../public/videos/cula.mp4";
import singularity from "../../public/videos/singularity.mp4";
import brightwave from "../../public/videos/brightwave.mp4";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title : "Layout Land",
      description : "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live : true,
      case : false,
    },
    {
      title : "Cula",
      description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",
      live : true,
    },
    {
      title : "Singularity",
      description : "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live : true,
      case : true,
    },
    {
      title : "Brightwave",
      description : "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
      live : true,
      case : true,
    }
  ];

  const [pos, setPos] = useState(null);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-32 relative">
      {products.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[20rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full bg-zinc-900"
          >
            {pos === 0 && (
              <video autoPlay muted loop>
                <source src={arqitel} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video autoPlay muted loop>
              <source src={ttr} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video autoPlay muted loop>
              <source src={yir} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={yahoo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={rainfall} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={layoutland} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={cula} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={singularity} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={brightwave} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
