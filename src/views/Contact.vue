<template>
  <div class="contactforma">
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
      <div class="row" style="color:white; margin-bottom:15px">
        <div class="col">
          <h3>Contact Us</h3>
          <p>
            We would be please to answer all of your questions - if any! So
            don't hesitate to write whatever you want to know about us or our
            dogs. Feel free to call us if you need a quicker response!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="contact-info">
            <img src="logo.png" width="150px" alt="image" />

            <br />
            <br /><b>Dogo di cattaro </b><br />Kotor <br />85330, Montenegro
            <br />Phone: +38269685018
            <br />
            <a href="krsto.ks001@gmail.com">krsto.ks001@gmail.com </a>
            <br />
            <br />
            <br />
            <h3>Check us on:</h3>
            <a
              href="https://sr-rs.facebook.com/Dogo-Di-Cattaro-992178320795339/"
              target="_blank"
            >
              <img
                src="facebook.png"
                width="40px"
                alt=""
                style="margin-right:10px"
            /></a>
            <a
              href="https://www.instagram.com/dogodicattaro/?hl=sr"
              target="_blank"
            >
              <img src="instagram-sketched.png" width="40px" alt=""
            /></a>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div class="col-md-9">
          <form @submit.prevent="submit">
            <div class="contact-form">
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.firstName.$error }"
              >
                <label class="control-label col-sm-2" for="fname"
                  >First Name</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter First Name"
                    name="fname"
                    v-model.trim="$v.firstName.$model"
                  />
                </div>
                <template v-if="$v.firstName.$error">
                  <div class="error" v-if="!$v.firstName.required">
                    Field is required
                  </div>
                  <div class="error" v-if="!$v.firstName.minLength">
                    Name must have at least
                    {{ $v.firstName.$params.minLength.min }} letters.
                  </div></template
                >
              </div>
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.lastName.$error }"
              >
                <label class="control-label col-sm-2" for="lname"
                  >Last Name</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                    name="lname"
                    v-model.trim="$v.lastName.$model"
                  />
                </div>
                <template v-if="$v.lastName.$error">
                  <div class="error" v-if="!$v.lastName.required">
                    Field is required
                  </div>
                  <div class="error" v-if="!$v.lastName.minLength">
                    Name must have at least
                    {{ $v.lastName.$params.minLength.min }} letters.
                  </div></template
                >
              </div>
              <div
                class="form-group"
                :class="{ 'form-group--error': $v.email.$error }"
              >
                <label class="control-label col-sm-2" for="email">Email</label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    v-model.trim="$v.email.$model"
                  />
                </div>
                <template v-if="$v.email.$error">
                  <div class="error" v-if="!$v.email.required">
                    Field is required
                  </div>
                </template>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment"
                  >Comment</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-default"
                    :disabled="submitStatus === 'PENDING'"
                  >
                    Submit
                  </button>
                  <p class="typo__p" v-if="submitStatus === 'OK'">
                    Thanks for your submission!
                  </p>
                  <p class="typo__p" v-if="submitStatus === 'ERROR'">
                    Please fill the form correctly.
                  </p>
                  <p class="typo__p" v-if="submitStatus === 'PENDING'">
                    Sending...
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  
    methods: {
      submit() {
       var obj = {firstName: this.$v.firstName.$model, lastName: this.$v.lastName.$model, email: this.$v.email.$model};
       console.log(obj);
       console.log("submit!");
      
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = "ERROR";
        } else {
          // do your submit logic here
          this.submitStatus = "PENDING";
          setTimeout(() => {
            this.submitStatus = "OK";
          }, 500);
        }
      },

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
.contact-info {
  margin-top: 10%;
}
.contact-info img {
  margin-bottom: 15%;
}
.contact-info h2 {
  margin-bottom: 10%;
}
.col-md-9 {
  background: #fff;
  padding: 3%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.contact-form label {
  font-weight: 600;
}
.contact-form button {
  background: #25274d;
  color: #fff;
  font-weight: 600;
  width: 25%;
}
.contact-form button:focus {
  box-shadow: none;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
