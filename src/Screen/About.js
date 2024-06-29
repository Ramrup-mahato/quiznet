import React from "react";
import NavBar from "../components/NavBar";
import Parents from "../components/ReUsable/Parents";
import Footer from "../components/ReUsable/Footer";
import ContainerBox from "../components/ReUsable/ContainerBox";
import imgAboutUs from "../assets/image/study4.png";
import team from "../assets/image/team.webp";
import Expert from "../assets/image/expert.png";
import pk from "../assets/image/pk1.png";
import quotebottom from "../assets/image/quotebottom.png";
import quotetop from "../assets/image/quotetop.png";
import ramrup from "../assets/image/ramrupm.png";
import ramsorup from "../assets/image/RAMSORUP1.jpg";

const About = () => {
  return (
    <Parents>
      <NavBar pageName={"Home"} />
      {/* <ContainerBox>
        <CourseDetailsPage path={path} />
      </ContainerBox>
      <Footer /> */}
      <div className="mainImage">
        <div className="backdrop-blur-sm w-full h-full flex justify-center items-center">
          <p className="text-[30px] md:text-[50px] drop-shadow-2xl text-white p-3  font-[900] fontFamily">
            Excellence: Study Guides, Quizzes, PDFs
          </p>
        </div>
      </div>
      <div className="bg-[var(--colW1)] dark:bg-gray-700 dark:text-gray-100 w-full flex justify-center ">
        <ContainerBox>
          <div className="flex gap-4 flex-col  md:flex-row">
            <div className="flex md:hidden">
              <h1 className="font-bold text-[30px] md:text-[50px] border-b-8 border-[var(--colB1)] mb-10">
                About Us
              </h1>
            </div>
            <div className=" flex-1 h-[500px] w-full md:w-[600px] flex justify-center items-center">
              <img
                src={team}
                alt="About us"
                className=" p-3 h-[400px] md:h-full"
              />
            </div>
            <div className="flex-1 flex justify-center flex-col items-start px-2">
              <h1 className="hidden md:block font-bold  text-[30px] md:text-[50px] border-b-8 border-[var(--colB1)] mb-10">
                About Us
              </h1>

              <p className="fontFamily w-full lg:max-w-[500px] p-5">
                We started this website in 2081 with a vision to assist all
                kinds of students and learners in mastering MCQ exams. We have
                remained true to our vision and commitment.
              </p>
              <p className="fontFamily w-full lg:max-w-[500px] p-5">
                We take pride in being a provider with a difference and are
                confident that once you engage with this website, you'll never
                look back.
              </p>
            </div>
          </div>
        </ContainerBox>
      </div>
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 w-full flex justify-center ">
        <ContainerBox>
          <div className="flex gap-4 flex-col  md:flex-row">
            <div className="flex md:hidden">
              <h1 className="font-bold text-[30px] md:text-[50px]  border-b-8 border-[var(--colB1)] mb-10">
                Students
              </h1>
            </div>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="flex-1 flex justify-center flex-col items-start px-2">
                <h1 className=" hidden md:block font-bold text-[30px] md:text-[50px] border-b-8 border-[var(--colB1)] mb-10">
                  Students
                </h1>

                <p className="fontFamily w-full lg:max-w-[500px] p-5">
                  On Quiznet, students can explore various quizzes and
                  course-related questions, including Loksewa, license exams,
                  and entrance preparations, with access to top-notch courses.
                  They can take self-assessment exams in multiple fields,
                  benefiting from the platform's wide range of exam options.
                  Quiznet also offers PDFs of past exams for comprehensive
                  preparation.
                </p>
                <p className="fontFamily w-full lg:max-w-[500px] p-5">
                  Additionally, it features live quiz papers where users can
                  participate in real-time exams. Rankings are determined based
                  on performance, enhancing the interactive learning experience.
                </p>
              </div>
              <div className=" flex-1 h-[500px] w-full md:w-[600px] flex justify-center items-center">
                <img src={imgAboutUs} alt="About us" className="w-full " />
              </div>
            </div>
          </div>
        </ContainerBox>
      </div>
      <div className="bg-[var(--colW1)] dark:bg-gray-700 dark:text-gray-100 w-full flex justify-center ">
        <ContainerBox>
          <div className="flex gap-4 flex-col  md:flex-row">
            <div className="flex md:hidden">
              <h1 className="font-bold text-[30px] md:text-[50px] border-b-8 border-[var(--colB1)] mb-10">
                Expert
              </h1>
            </div>
            <div className=" flex-1 h-[500px] w-full md:w-[600px] flex justify-center items-center">
              <img src={Expert} alt="About us" className="w-full" />
            </div>
            <div className="flex-1 flex justify-center flex-col items-start px-2">
              <h1 className="hidden md:block font-bold text-[30px] md:text-[50px] border-b-8 border-[var(--colB1)] mb-10">
                Expert
              </h1>

              <p className="fontFamily w-full lg:max-w-[500px] p-5">
                On Quiznet, experts can create quizzes by selecting questions
                from the platform or uploading their own. Students receive
                invitations from experts to take exams.
              </p>
              <p className="fontFamily w-full lg:max-w-[500px] p-5">
                rankings are generated based on marks. Experts can monitor
                student performance and download rank lists to assess and track
                progress effectively.
              </p>
            </div>
          </div>
        </ContainerBox>
      </div>
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 w-full flex justify-center ">
        <ContainerBox>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 py-5 px-2">
            <div className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <img
                src={ramrup}
                alt="employee..."
                className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
              />

              <div className="flex-1 flex justify-center flex-col items-start p-2">
                <p className="font-bold text-[14px] border-b-4 border-[var(--colB1)] mb-2">
                  CEO, Founder & Developer
                </p>
                <div className="w-full lg:max-w-[600px]">
                  <div>
                    <img src={quotetop} alt="top quote" />{" "}
                  </div>

                  <i className="fontFamily  px-5 text-[12px]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    My name is Ramrup . I am the CEO, Founder, and Developer of
                    QuizNet, and I'm excited to share that QuizNet is a platform
                    where you can find and play quiz games for fun. You can
                    access QuizNet from both the app and website. QuizNet offers
                    various types of quizzes related to government exams,
                    license exams, memory tests, fun quizzes, and more. Experts
                    can also add and create question papers.
                  </i>

                  <div className="w-full flex justify-end items-end">
                    <img src={quotebottom} alt="bottom quote" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <img
                src={ramsorup}
                alt="employee..."
                className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
              />

              <div className="flex-1 flex justify-center flex-col items-start px-2">
                <p className="font-bold text-[14px] border-b-4 border-[var(--colB1)] mb-2">
                  Marketing Director (MD) & Marketing Lead
                </p>
                <div className="w-full lg:max-w-[600px]">
                  <div>
                    <img src={quotetop} alt="top quote" />{" "}
                  </div>

                  <i className="fontFamily  px-5 text-[12px]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Hi, I'm Ramsorup. Welcome to QuizNet. I am the Marketing
                    Lead of QuizNet, and I'm glad to share that QuizNet is a
                    platform for all kinds of students who want to prepare for
                    various levels of LokSewa exams, entrance exams, vehicle
                    licenses, and more. Experts can add and create question
                    papers. With QuizNet, you can participate in live quizzes
                    and enhance your learning experience effortlessly. Our
                    platform offers comprehensive study tools to help you
                    prepare effectively for exams.
                  </i>

                  <div className="w-full flex justify-end items-end">
                    <img src={quotebottom} alt="bottom quote" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg">
              <img
                src={pk}
                alt="employee..."
                className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
              />

              <div className="flex-1 flex justify-center flex-col items-start px-2">
                <p className="font-bold text-[14px] border-b-4 border-[var(--colB1)] mb-2">
                  HR (Human resources)
                </p>
                <div className="w-full lg:max-w-[600px]">
                  <div>
                    <img src={quotetop} alt="top quote" />{" "}
                  </div>

                  <i className="fontFamily  px-5 text-[12px]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Hi, my name is Priyanka . I am the HR (Human Resources) of
                    QuizNet, and I'm excited to share that QuizNet is a platform
                    where you can find all kinds of course-related quizzes. If
                    you're a student, just log in, and you'll be able to access
                    a wide range of courses and live quizzes. Our platform
                    offers comprehensive study tools to help you prepare
                    effectively for exams. With QuizNet, participate in live
                    quizzes, and enhance your learning experience with ease.
                  </i>
                  <br />
                  <i className="fontFamily  px-5 text-[12px]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    नमस्ते, मेरो नाम प्रियंका हो। म क्विजनेटको एचआर (मानव
                    संसाधन) हुँ, र म तपाईलाई यो जानकारी दिन पाउँदा खुशी छु कि
                    क्विजनेट एउटा प्लेटफर्म हो जहाँ तपाईलाई सबै प्रकारका
                    पाठ्यक्रम-सँग सम्बन्धित क्विजहरू पाउन सक्नुहुन्छ। यदि तपाई
                    विद्यार्थी हुनुहुन्छ भने, केवल लग इन गर्नुहोस्, र तपाईले
                    विभिन्न पाठ्यक्रमहरू र लाइभ क्विजहरूमा पहुँच पाउन
                    सक्नुहुन्छ। हाम्रो प्लेटफर्मले तपाईलाई परीक्षाको लागि
                    प्रभावकारी तयारी गर्न व्यापक अध्ययन उपकरणहरू प्रदान गर्दछ।
                    क्विजनेटसँग, लाइभ क्विजहरूमा भाग लिनुहोस्, र सजिलै आफ्नो
                    सिकाइ अनुभवलाई सुधार गर्नुहोस्।
                  </i>
                  <div className="w-full flex justify-end items-end">
                    <img src={quotebottom} alt="bottom quote" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerBox>
      </div>
      <Footer />
    </Parents>
  );
};

export default About;
