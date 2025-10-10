"use client"
import { motion, useInView } from "framer-motion";
import { FaGoogle } from "react-icons/fa6";
import GoogleReviewCard from "./ui/GoogleReviewCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Mr Nilesh V Gangawane",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVPdl3cUEm1fP8yrhLIFIG-5jQST_64xVt4f0B1PLf9hZYh3mKY=w90-h90-p-rp-mo-br100",
    text: "I personally experienced treatment here, Best service very good treatment and really appreciated for their work they taken care of the patients and give the treatment very carefully. Special thanks to Dr Vaibhav Harkare.Strongly recommended this place",
    rating: 5,
    author_url: "#"
  },
  {
    name: "deepak futane",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLsEJONFYIitMgm47nnmZm_CX_X0-YC5hKzU2r7zZ_1r0p6Ly0=w45-h45-p-rp-mo-br100",
    text: "Very energetic doctor with hard core experience. For dentists it's hard to manage patients appointments but doctor in Shree Dental Clinic is very punctual for appointment. Well advance clinic with world class equipment set up.",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Guruprasad Pathak",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX2hfJnNMgHQHZyf1NsqFZuS1P1FkcCRyAl7Rn4YCbBpAUuygWVxg=w45-h45-p-rp-mo-br100",
    text: "Very Good service. Neat and clean hospital. Proper Dental Examination and instruments set up. Clever Doctor n staff. Over all performance Excellent. Dr.Snehal n Dr.Vaibhav thank you very much.",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Shreya Bokare",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIeZuZL7hheD2YkrQWoJrrFQbCE_8M9iWEfZ7cmXvCozyYUHg=w45-h45-p-rp-mo-br100",
    text: "Best clinic... Great treatment affordable price and proper instructions were given for every procedure... Hygiene is maintained and well sanitised overall happy with the service thankyou 😁",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Pratiksha dhage",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIwuna5VpI_-keAPPsuChvDwy2lBhfNJbulNKQsUcZll7LdZw=w45-h45-p-rp-mo-br100",
    text: "Great treatment with affordable price 👍 Doctor's interaction with patient is so good they give proper time to understand each and every thing in detail ☺️ Dr with great knowledge and great experience.",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Rucha Sahastrabuddhe",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUbZiTW86cF_OxfINWDEcAzP6u02_mMUNs8rTNZCG9O8cHfLQtj=w45-h45-p-rp-mo-br100",
    text: "I went there for my braces treatment and I’m very happy with the results. To be honest I was scared before the treatment starts but doctor made me very comfortable.",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Upendra Sahastrabudhe",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjU9FjkhgOWhoOoAry04IPX3W3woIuE9_tMa6oc4G79CivwnWKTnnw=w45-h45-p-rp-mo-br100",
    text: "Well I must recommend this clinic.. cause I went there for my grandmother and younger sister's treatment... and the results were excellent as we expected.",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Uma Deshpande",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIoqqCtL7umToEVd9wCeTeGS3MQtNkADcNzjq624tylW3YDZQ=w45-h45-p-rp-mo-br100",
    text: "खूप छान ट्रीटमेंट , अतिशय हळुवारपणे दाताची जोपासना. अगदी अचूक निदान, तपासणी व लवकर योग्य उपचार शिवाय रास्त दरात. आम्ही जवळच्या मित्रांना व नातेवाईकांना आपल्या क्लिनिक बद्दल माहिती देवू.",
    rating: 5,
    author_url: "#"
  },
  
  {
    name: "Sakshi Chavan",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJ1A8ficrYNhNEVUsq0TyUX90ilHpjVRMHxt9ETzO-rE5HqAQ=w45-h45-p-rp-mo-br100",
    text: "Dr. Snehal did my braces treatment, trust me she's one of a kind. She is so great at her job. I was nervous for this whole procedure but she made it easy for me. I would definitely recommend her. Loved the way she treated me & took care of small details.",
    rating: 5,
    author_url: "#"
  },
  {
    name: "Ujwala Ingale",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIyM05ZQcC9rs9D6L-RdVuynBbilDoC-zw4jvFD55X1hJ3H4A=w45-h45-p-rp-mo-br100",
    text: "I went there for my daughter's treatment, Dr. Snehal handled it very perfectly almost painless for my daughter. Doctor is friendly, informative & provides excellent service. Highly recommended if you are looking for a good dentist. I will be coming here for all my future dental needs. Thank you Dr. Snehal.",
    rating: 5,
    author_url: "#"
  },
  
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  return (
    <div className="">
      {/* Heading with scroll animation */}
      <motion.div
      className="text-center mb-10 px-6 md:px-12 lg:px-24 pt-12"

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // triggers each time in view
        transition={{ duration: 0.8 }}
        
      >
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold  bg-clip-text mb-6 tracking-tight mt-4  ">
          
          Smiles Speak Louder Than Words
          
        </h3>
        
        

        <motion.div
  className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"
  initial={{ width: "10%" }}
  animate={{ width: "80%" }} // increase width
  transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
/>

        
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
          Hear From Our Patients
        </p>
      </motion.div>

      {/* Carousel */}
      <Swiper
       className="mb-12 px-6 md:px-12 lg:px-24 pb-12"
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
       
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="flex h-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex-1"
            >
              <GoogleReviewCard review={review} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Reviews;