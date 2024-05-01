const app = Vue.createApp({
  methods: {
    addComment() {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const comment = document.getElementById("comment");
      this.feedbacks.push({
        name: name.value,
        email: email.value,
        comment: comment.value,
        like: 0,
        reply: 0,
      });
      name.value = "";
      email.value = "";
      comment.value = "";
    },
  },
  data() {
    return {
      navItems: [
        { id: 0, name: "Home", url: "./index.html" },
        { id: 1, name: "Overview", url: "./overview.html" },
        { id: 2, name: "Solution", url: "./solution.html" },
        {
          id: 3,
          name: "Community Engagement",
          url: "./community-engagement.html",
        },
        { id: 4, name: "Feedback", url: "./Feedback.html" },
      ],
      upcommingEvents: [
        {
          id: 0,
          img: "./assets/upcomming-events/2.jpg",
          title: "Park Clean-Up Day",
          des: "Join us for a community clean-up event to remove litter and debris from the park and its surroundings.",
          link: { text: "Registration required.", url: "#member-form" },
          date: "Saturday, April 27th, 9:00 AM - 12:00 PM",
        },
        {
          id: 1,
          img: "./assets/upcomming-events/1.jpg",
          title: "Water Quality Workshop",
          des: "Learn how to monitor and improve water quality in your local area",
          link: { text: "Free admission.", url: "" },
          date: "Tuesday, May 15th, 6:00 PM - 8:00 PM",
        },
        {
          id: 2,
          img: "./assets/upcomming-events/3.jpg",
          title: "River Restoration Project",
          des: "Volunteer to plant native vegetation and restore the health of our local river ecosystem.",
          link: { text: "No experience necessary.", url: "" },
          date: "",
        },
      ],
      feedbacks: [
        {
          name: "Sachintha Nimesh",
          email: "@tgsnimesh",
          comment:
            "Thank you for providing a platform to discuss such an important issue. Water pollution affects us all, and it's inspiring to see the community coming together to address it",
          like: 12,
          reply: 8,
        },
        {
          name: "Dumidu Lakshan",
          email: "@thugXxeus",
          comment:
            "I recently participated in a cleanup event, and it was eye-opening to see the amount of trash in our waterways. We need to do more to prevent pollution and protect our environment.",
          like: 11,
          reply: 2,
        },
        {
          name: "Vimukthi lakshan",
          email: "@ShayComac",
          comment:
            "Thank you for providing a platform to discuss such an important issue. Water pollution affects us all, and it's inspiring to see the community coming together to address it",
          like: 6,
          reply: 3,
        },
        {
          name: "Vimukthi lakshan",
          email: "@ShayComac",
          comment:
            "Learning about the impacts of water pollution has motivated me to make changes in my own habits and advocate for cleaner waterways.",
          like: 18,
          reply: 10,
        },
      ],
    };
  },
});

app.component("nav-bar", {
  props: ["navItems"],
  template: `<nav class="nav-bar" id="nav-bar">
                <div class="logo">
                    <h1>Green<span>Globe</span></h1>
                </div>
                <ul class="nav-links-container">
                    <li
                    class="nav-link"
                    v-for="({id, name, url}, index) in navItems"
                    :key="index"
                    >
                    <a :href="url"
                        ><span>{{ name.charAt(0) }}</span>{{ name.slice(1) }}</a
                    >
                    </li>
                </ul>
            </nav>`,
});

app.component("footer-vue", {
  props: ["navItems"],
  template: `<footer>
                <div class="top-section">
                  <div class="left">
                    <div class="logo">
                      <h1><span>Gr</span>een<br /><span>Gl</span>obe</h1>
                    </div>
                    <p>
                      “Our task must be to free ourselves… by widening our circle of<br />
                      compassion to embrace all living creatures and the whole of nature
                      <br />and its beauty.” <span>– Albert Einstein –</span>
                    </p>
                  </div>
                  <div class="center">
                    <p>Links</p>
                    <ul>
                      <li v-for="({name, url}, index) in navItems" :key="index">
                        <a :href="url">{{ name }}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="right">
                    <p>Get In Touch</p>
                    <div class="contact">
                      <address>
                        <p>
                          E-Mail :
                          <a href="mailto:tgsnimesh@gmail.com"
                            ><i class="fa-regular fa-envelope"></i> tgsnimesh@gmail.com</a
                          >
                        </p>
                        <p>
                          Phone :
                          <a href="tel:0778519573"
                            ><i class="fa-solid fa-phone"></i> 077 851 9573</a
                          >
                        </p>
                      </address>
                    </div>
                    <div class="sosial-links">
                      <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                      <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                      <a href=""><i class="fa-brands fa-instagram"></i></a>
                      <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
                <div class="bootom">
                  <p>
                    &copy; 2024 GreenGlobe. All rights reserved. Website created by
                    <a href="https://github.com/tgsnimesh"
                      ><i class="fa-brands fa-github"></i
                    ></a>
                    <a href="https://github.com/tgsnimesh">NimeshDev</a>.
                  </p>
                </div>
              </footer>
              <a href="#nav-bar" class="move-top"><i class="fa-solid fa-arrow-up"></i></a>`,
});

app.mount("body");
