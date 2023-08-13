'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const handleSubmit = (e) => {
  e.preventDefault();
};

const ContactUs = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Contact Us
        </h4>
      </div>
    </div>

    <div className={`${styles.container} py-5`}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              First Name:
            </label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              className={`${styles.input}`}
              name="name"
              id="name"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="name" className={`${styles.labels}`}>
              Last Name:
            </label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className={`${styles.input}`}
              name="name"
              id="name"
            />
          </div>
        </div>

        <div className="flex flex-row">
          <div className={`${styles.mb3}`}>
            <label htmlFor="email" className={`${styles.labels}`}>
              Email:
            </label>
            <br />
            <input
              type="email"
              placeholder="Email id"
              className={`${styles.input}`}
              name="email"
              id="email"
            />
          </div>

          <div className={`${styles.mb3}`}>
            <label htmlFor="phoneNumber" className={`${styles.labels}`}>
              Contact:
            </label>
            <br />
            <input
              type="phone"
              placeholder="Phone Number "
              className={`${styles.input}`}
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
        </div>

        <div className={`${styles.mb3}`}>
          <label htmlFor="answers" className={`${styles.labels}`}>
            Your Query:
          </label>
          <br />
          <textarea
            className="mt-[5px] mx-[15px] min-h-[30vh] min-w-[52vw] bg-[#25618B] p-3 lg:text-[15px] md:text-[10px] sm:text-[6px] text-[10px] text-white rounded-[13px]"
            placeholder="Anything you wanna Ask or Suggest "
            name="answers"
            id="answers"
          />
        </div>

        <button
          type="submit"
          className="bg-[#25618B] rounded-[10px] p-2 m-2 hover:bg-white hover:text-black mx-[15px] font-semibold lg:text-[25px] md:text-[15px] sm:text-[8px] text-[15px] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </motion.footer>
);

export default ContactUs;