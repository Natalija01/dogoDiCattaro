<template>
  <div>
    <!--MAPS -->
    <div class="container-fluid">
      <div class="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.4035334162713!2d18.77135365816756!3d42.42863897458393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI1JzQzLjEiTiAxOMKwNDYnMjAuOCJF!5e1!3m2!1sen!2s!4v1596108513083!5m2!1sen!2s"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>

    <div class="container contact">
      <div class="row" style="color:white; ">
        <div class="col">
          <h3>Contact Us</h3>
          <p>
            We would be please to answer all of your questions - if any! So
            don't hesitate to write whatever you want to know about us or our
            dogs. Feel free to call us if you need a quicker response!
          </p>
        </div>
      </div>

      <div class="row mb-3 flex">
        <div class="col-md-3">
          <img src="logo.png" width="150px" alt="image" />
        </div>
        <div class="col-md-4 justify-content-begin">
          <h3 class="text-center">Dogo di cattaro</h3>

          Kotor <br />85330, Montenegro <br />Phone: +38269685018
          <br />
          <a href="krsto.ks001@gmail.com">krsto.ks001@gmail.com </a>
          <br />
        </div>
        <div class="col-md-5">
          <div class="mb-3">
            <h3 class="text-center">Check us on</h3>
            <a
              href="https://sr-rs.facebook.com/Dogo-Di-Cattaro-992178320795339/"
              target="_blank"
            >
              <img src="facebook.png" width="40px" alt="" class="mx-4"
            /></a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/dogodicattaro/?hl=sr"
              target="_blank"
            >
              <img src="instagram-sketched.png" width="40px" alt="" class="mx-4"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <Footer style="margin-top:20px"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      submitStatus: null,
    };
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(3),
    },
    lastName: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
.contact {
  padding: 4%;
  height: 400px;
}
.col-md-3 {
  background: #fdfa44;
  padding: 4%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.col-md-4 {
  background: #fff;
  padding: 3%;
}
.col-md-5 {
  background: #fff;
  padding: 3%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.text-center {
  text-align: center;
}
</style>
