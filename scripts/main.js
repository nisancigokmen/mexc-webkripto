document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  // 1. Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. Mobile navigation toggle
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Optional: Close nav when a link is clicked (for better UX)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.classList.remove("open");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Charts
  initRevenueChart();
  initTrafficChart();

  // Add active class to sidebar items on click
  const sidebarItems = document.querySelectorAll(".sidebar-nav ul li");
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebarItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Chart period buttons functionality
  const chartPeriodButtons = document.querySelectorAll(".chart-actions button");
  chartPeriodButtons.forEach((button) => {
    button.addEventListener("click", function () {
      chartPeriodButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      // In a real app, you would update the chart data here
    });
  });
});

function initRevenueChart() {
  const ctx = document.getElementById("revenueChart").getContext("2d");

  // Sample data - in a real app, you would fetch this from an API
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [6500, 5900, 8000, 8100, 8600, 9250, 10200],
        backgroundColor: "rgba(67, 97, 238, 0.2)",
        borderColor: "rgba(67, 97, 238, 1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleFont: {
            size: 14,
          },
          bodyFont: {
            size: 12,
          },
          callbacks: {
            label: function (context) {
              return "$" + context.parsed.y.toLocaleString();
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            callback: function (value) {
              return "$" + value.toLocaleString();
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  };

  new Chart(ctx, config);
}

function initTrafficChart() {
  const ctx = document.getElementById("trafficChart").getContext("2d");

  // Sample data
  const data = {
    labels: ["HIZLI", "GÜVENLİ", "KOLAY ARAYÜZ", "KAZANÇLI"],
    datasets: [
      {
        data: [100, 100, 100, 100],
        backgroundColor: [
          "rgba(67, 97, 238, 0.8)",
          "rgba(63, 55, 201, 0.8)",
          "rgba(76, 201, 240, 0.8)",
          "rgba(248, 113, 113, 0.8)",
        ],
        borderColor: [
          "rgba(67, 97, 238, 1)",
          "rgba(63, 55, 201, 1)",
          "rgba(76, 201, 240, 1)",
          "rgba(248, 113, 113, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 12,
            padding: 20,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          bodyFont: {
            size: 12,
          },
          callbacks: {
            label: function (context) {
              return context.label + ": " + context.raw + "%";
            },
          },
        },
      },
    },
  };

  new Chart(ctx, config);
}
