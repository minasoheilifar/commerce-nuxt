<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="email-subscribe p-3">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="d-flex align-items-center">
                  <img
                    src="/images/Newsletters.png"
                    class="me-4"
                    style="width: 77px"
                  />
                  <div class="d-flex flex-column">
                    <h5 class="m-0" style="font-size: 18px">
                      Join Our Newsletter
                    </h5>
                    <p class="mt-1">
                      Sign up and we'll send the best deals to you.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <el-form
                ref="newsLetterForm"
                :model="formData"
                :rules="rules"
                 @submit.prevent="postForm"
                 >
                  <div class="d-flex my-3 flex-column flex-md-row align-items-md-start justify-contents-center">
                    <el-form-item required class="w-100 me-1" prop="email">
                      <el-input
                        v-model="formData.email"
                        style="height: 34px !important;"
                        placeholder="Enter your email"
                        :prefix-icon="Message"
                      />
                    </el-form-item>
                    <el-form-item>
                      <el-button native-type="submit" class="active">Subscribe</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 pt-4 pb-1">
            <div class="row justify-content-between">
              <div class="col-12 col-lg-4 pb-3">
                <img class="footer-logo" src="/images/logo4.png" alt="MinaSF" />
                <div class="py-3">
                  <p>
                    Compare and buy office furniture with The best quality and
                    price only in MinaSF.
                  </p>
                </div>
                <div class="images-container py-3">
                  <div class="grid-item">
                    <img src="/images/american.png" />
                  </div>
                  <div class="grid-item">
                    <img src="/images/visa.png" />
                  </div>
                  <div class="grid-item">
                    <img src="/images/master-card.png" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-8 mt-4 mt-lg-0">
                <div class="row justify-content-between">
                  <div class="col-12 col-sm-4 mb-5 my-sm-1">
                    <div class="footerTitle">
                      <h6>Company</h6>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/" class=""
                          ><img src="" class="arrow" /><span class="txt"
                            >MinaSF.co</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/" class=""
                          ><img src="" class="arrow" /><span class="txt"
                            >Flights</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/hotels" class="font-size-sm"
                          ><img src="" class="arrow" /><span class="txt"
                            >Hotels</span
                          ></a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4 mb-5 my-sm-1">
                    <div class="footerTitle">
                      <h6>Contact</h6>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/global/contact-us" class="font-size-sm"
                          ><img src="" class="arrow" /><span class="txt"
                            >Contact Us</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/global/about-us" class="font-size-sm"
                          ><img src="" class="arrow" /><span class="txt"
                            >About Us</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/global/terms-of-use" class="font-size-sm"
                          ><img src="" class="arrow" /><span class="txt"
                            >Terms of use</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/global/privacy-policy" class="font-size-sm"
                          ><img src="" class="arrow" /><span class="txt"
                            >Privacy Policy</span
                          ></a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4 mb-5 my-sm-1">
                    <div class="footerTitle">
                      <h6>More</h6>
                    </div>
                    <hr />
                    <div class="row">
                      <!--[-->
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/" class=""
                          ><img src="" class="arrow" /><span class="txt"
                            >Why MinaSF</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a class="font-size-sm cursor-pointer"
                          ><img src="" class="arrow" /><span class="txt"
                            >FAQ</span
                          ></a
                        >
                      </div>
                      <div class="col-6 col-sm-12 my-1 my-sm-2">
                        <a href="/global/imprint-details" class="font-size-sm"
                          ><img src="" class="arrow" /><span class="txt"
                            >Imprint</span
                          ></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-12">
            <div
              class="d-flex justify-content-between align-items-center border-top py-3"
            >
              <div style="font-size: 12px">
                © 2024 MinaSF. All rights reserved
              </div>
              <div class="d-flex">
                <a
                  href="http://instagram.com"
                  target="_blank"
                  class="circle ms-1 py-1 text-center"
                  title="instagram"
                >
                  <img src="/images/instagram.svg" /> </a
                ><a
                  href="http://facebook.com"
                  target="_blank"
                  class="circle ms-1 py-1 text-center"
                  title="facebook"
                >
                  <img src="/images/facebook.svg" /> </a
                ><a
                  href="http://twitter.com"
                  target="_blank"
                  class="circle ms-1 py-1 text-center"
                  title="twitter"
                >
                  <img src="/images/twitter.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";
import { useAppStore } from "~/stores/app";
const { postNewsLetterForm } = useAppStore();
////////////////////state
const formData = reactive({
  email: ""
});
/////////////////////form validation
const newsLetterForm = ref<FormInstance>();
const validationForm = () => newsLetterForm.value?.validate();
const rules = reactive<FormRules<typeof formData>>({
    email: [
        {required:true , message: "Please input Email address" , trigger: "change" },
        {type: "email" , message: "Please enter a valid email address" , trigger:"change"}
    ]
})
//////////////////////methods
const postForm = async () => {
//   postingForm.value = true;
  try {
    await validationForm();
/////////////////////call api
    const response = await postNewsLetterForm(formData);
    ElMessageBox.alert(response.data, "successfully");
    newsLetterForm.value?.resetFields();

  } catch (error) {
    console.log("~ error:", error);
  }
//   postingForm.value = false;
};
</script>

<style lang="scss">
@import "~/assets/sass/components/shared/footer.scss";
</style>
