// Form submission handler
const bookingForm = document.getElementById("bookingForm")

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const departure = document.getElementById("departure").value
    const returnDate = document.getElementById("return").value
    const departCity = document.getElementById("departCity").value
    const arrivalCity = document.getElementById("arrivalCity").value
    const remarks = document.getElementById("remarks").value

    // Validate dates
    if (new Date(departure) >= new Date(returnDate)) {
      showToast("Return date must be after departure date", "error")
      return
    }

    // Log form data (in a real app, send to server)
    console.log("[v0] Form submitted with data:", {
      firstName,
      lastName,
      email,
      phone,
      departure,
      returnDate,
      departCity,
      arrivalCity,
      remarks,
    })

    showToast("Your flight search has been submitted! Our team will contact you shortly.", "success")

    // Reset form
    bookingForm.reset()
  })
}

// Toast notification function
function showToast(message, type = "info") {
  const toast = document.createElement("div")
  toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === "success" ? "#4CAF50" : type === "error" ? "#f44336" : "#2196F3"};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
        max-width: 400px;
    `
  toast.textContent = message
  document.body.appendChild(toast)

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease-out"
    setTimeout(() => toast.remove(), 300)
  }, 4000)
}

// Add animations to stylesheet
if (!document.querySelector("style[data-toast-animations]")) {
  const style = document.createElement("style")
  style.setAttribute("data-toast-animations", "true")
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(style)
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
    }
  })
})
