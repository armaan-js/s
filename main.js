// main.js

document.addEventListener("DOMContentLoaded", () => {
  const button1 = document.getElementById("button1")
  button1.addEventListener("click", () => {
    window.location.href = "index.html"
  })

  const button2 = document.getElementById("button2")
  button2.addEventListener("click", () => {
    window.location.href = "product.html"
  })

  
  const contact = document.getElementById("contact-us")
  if (contact) {
    contact.addEventListener("click", () => {
      const userResponse = confirm("Do you want to contact us via email?")

      if (userResponse) {
        window.location.href =
          "mailto:spice-world@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20ask%20about..."
      }
    })
  }

  const button3 = document.getElementById("button3")
  if (button3) {
    button3.addEventListener("click", () => {
      window.location.href = "feedback.html"
    })
  }

 
  const button4 = document.getElementById("button4")
  if (button4) {
    button4.addEventListener("click", () => {
      
      alert("Checkout functionality coming soon!")
    })
  }
})

const feedbackForm = document.getElementById("feedbackForm")
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (event) => {
      event.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const feedback = document.getElementById("feedback").value

      const mailtoLink = `mailto:support@spice-world.co.uk?subject=Feedback from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AFeedback:%0D%0A${encodeURIComponent(feedback)}`

      window.location.href = mailtoLink
    })
  }


