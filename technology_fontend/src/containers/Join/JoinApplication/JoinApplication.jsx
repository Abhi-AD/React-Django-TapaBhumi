import React from 'react';
import './JoinApplication.css';
import {  MdCall, MdChatBubble, MdCheckCircle, MdChecklistRtl, MdEmojiEmotions, MdEmojiFlags, MdLightbulbCircle, MdSearch, MdSpatialTracking, MdVideoCall } from 'react-icons/md';

const Step = ({ num, title, description, icon }) => (
  <div className="job-application-col">
    <span className='job-application-icon'>{icon}</span>
    <div className="job-application-col-col">
      <div className="job-application-col-col-num">
        <span>{`Step ${num}`}</span>
        <h3>{title}</h3>
      </div>
      <p className="job-application-col-col-des">{description}</p>
    </div>
  </div>
);

const JoinApplication = () => (
  <div className='job-application'>
    <div className="job-application-title">
      <h1 className="job-application-title-header">Your application <span>journey</span></h1>
      <p className="job-application-title-des">Our hiring process is designed to ensure that both you and Leapfrog are the perfect match for each other. While our process may vary depending on the role, here's an overview of what you can expect when you apply to join our team.</p>
    </div>
    <div className="job-application-row">
      <Step num={1} title="Apply Online" description="Begin your journey by submitting your application online. We encourage you to choose positions that truly excite you and align with your skills and aspirations." icon={<MdEmojiEmotions fontSize={30} />} />
      <Step num={2} title="Profile Screening" description="Once we receive your application, our dedicated talent acquisition team will review your CV, portfolio (if applicable), and evaluate your qualifications. This initial screening helps us identify candidates who closely align with the role's requirements." icon={<MdSpatialTracking fontSize={30} />} />
      <Step num={3} title="Screening Call" description="If your qualifications meet our criteria, you'll receive a scheduled screening call. This is an opportunity for us to learn more about your background, experiences, and career aspirations. It's also a chance for you to get to know Leapfrog better." icon={<MdCall fontSize={30} />} />
      <Step num={4} title="Technical Assessment or Written Assignment" description="Depending on the role, you may be asked to complete an assessment. This helps us gauge your specific skills and knowledge related to the position." icon={<MdChecklistRtl fontSize={30} />} />
      <Step num={5} title="Face-to-Face Virtual or Onsite Interview" description="For some roles, we'll invite you for an interview, which can be conducted virtually or onsite. This interview allows us to dive deeper into your capabilities and assess your cultural fit with Leapfrog." icon={<MdVideoCall fontSize={30} />} />
      <Step num={6} title="Aligning Expectations" description="We believe in open and honest communication. During this phase, we'll discuss your expectations and the role's responsibilities to ensure that both parties are on the same page." icon={<MdLightbulbCircle fontSize={30} />} />
      <Step num={7} title="Aligning Expectations" description="We may conduct reference checks to gain insights into your past performance and character, helping us make a well-informed hiring decision." icon={<MdSearch fontSize={30} />} />
      <Step num={8} title="HR Interview" description="Our HR team will have a conversation with you to discuss compensation, benefits, and other important details. We want you to have a clear understanding of what it means to be part of the Leapfrog family." icon={<MdChatBubble fontSize={30} />} />
      <Step num={9} title="Offer" description="Congratulations! If all goes well, we'll extend an offer for you to join our team. We'll provide guidance on the next steps, including the onboarding process." icon={<MdCheckCircle fontSize={30} />} />
      <Step num={10} title="Onboarding" description="As you embark on your journey at Leapfrog, our people management team will ensure a smooth transition. We'll walk you through everything you need to know to start your new role." icon={<MdEmojiFlags fontSize={30} />} />
    </div>
  </div>
);

export default JoinApplication;
