import React from 'react'
import Template from '../components/core/auth/Template'
import SignupImg from '../assets/Images/signup.webp'
function Signup() {
  return (
    <Template
          title="Join the millions learning to code with CourseKing for free"
          description1="Build skills for today, tomorrow, and beyond."
          description2="Education to future-proof your career."
          image={SignupImg}
          formType="signup"
      />
  )
}

export default Signup