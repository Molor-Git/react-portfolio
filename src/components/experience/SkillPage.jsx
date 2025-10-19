import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SkillPage = () => {
  const { skill } = useParams()
  const navigate = useNavigate()

  // prefer skillId from state (set by Experience Link) so we can target the exact element

  const handleBack = (e) => {
    e.preventDefault()
    // Prefer going back in history to preserve scroll/position exactly
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

  // Fallback (opened in new tab): navigate to home and instruct Experience to show the Cybersecurity section
  navigate('/', { state: { showSection: 'Cybersecurity Analyst' } })
  }

  return (
    <section className="skill-page container">
      <h2>{skill.replace(/-/g, ' ')}</h2>
      <p>This is a placeholder for the <strong>{skill.replace(/-/g, ' ')}</strong> skill page. You can add hands-on projects here later.</p>
      <p>
        <button onClick={handleBack} className="btn btn-link">Back to Experience</button>
      </p>
    </section>
  )
}

export default SkillPage
