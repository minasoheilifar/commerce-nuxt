<template>
  <div class="container contactUs-container-page">
    <div class="row">
      <div class="col-12">
        <div class="row px-md-5 px-4 py-4 formBox">
          <div class="col-12 col-md-7">
            <div>
              <h4>Send tickets to support</h4>
            </div>
            <el-form
              ref="contactUsForm"
              style="max-width: 600px"
              :model="formData"
              status-icon
              :rules="rules"
              label-width="auto"
              class="demo-formData"
              label-position="left"
              size="large"
              :disabled="postingForm"
              @submit.prevent="postForm"
            >
              <div class="row my-4">
                <div class="col-12 col-lg-6">
                  <el-form-item label="Name and Surname" prop="name">
                    <el-input v-model="formData.name" :prefix-icon="User" />
                  </el-form-item>
                </div>
                <div class="col-12 col-lg-6">
                  <el-form-item label="Email" prop="email">
                    <el-input v-model="formData.email" :prefix-icon="Message" />
                  </el-form-item>
                </div>
                <div class="col-12">
                  <el-form-item label="Subject" prop="subject">
                    <el-select
                      v-model="formData.subject"
                      placeholder="Please select the subject"
                    >
                      <template #prefix>
                        <el-icon><EditPen /></el-icon>
                      </template>
                      <el-option
                        label="Passport correction"
                        value="Passport correction"
                      />
                      <el-option
                        label="Booking revalidation"
                        value="Booking revalidation"
                      />
                      <el-option label="Ok to board" value="Ok to board" />
                      <el-option
                        label="travel requirement"
                        value="travel requirement"
                      />
                      <el-option label="Baggage" value="Baggage" />
                      <el-option
                        label="Hotel booking cancellation"
                        value="Hotel booking cancellation"
                      />
                      <el-option
                        label="Hotel booking amendment"
                        value="Hotel booking amendment"
                      />
                      <el-option label="Other" value="Other" />
                    </el-select>
                  </el-form-item>
                </div>
                <div class="col-12">
                  <el-form-item label="Description" prop="description">
                    <el-input
                      v-model="formData.description"
                      type="textarea"
                      placeholder="Write your description"
                    />
                  </el-form-item>
                </div>
                <div class="col-12">
                  <el-form-item label="Attachment" prop="attachment">
                    <input type="file" ref="attachment" class="attachment"/>
                  </el-form-item>
                </div>
                <div class="col-12">
                  <el-form-item>
                    <el-button
                      native-type="submit"
                      :loading="postingForm"
                      class="active"
                    >
                      Submit
                    </el-button>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </div>
          <div class="col-12 col-md-5 contactUsImageBox"
          >
            <img src="/images/contactUs.png" class="contactUsImage" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "~/stores/app";
const { postContactUsForm } = useAppStore();

import type {
  ComponentSize,
  FormProps,
  FormInstance,
  FormRules,
} from "element-plus";
import { User, Message, EditPen } from "@element-plus/icons-vue";

/////////////////////////////////////////////////////dom refs
const attachment = ref<HTMLElement>();
console.log("🚀 ~ attachment:", attachment.value)
/////////////////////////////////////////////////////state
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  description: "",
});
const postingForm = ref(false);
//////////////////////////////////////////////////////form validation
const contactUsForm = ref<FormInstance>();
const validateForm = () => contactUsForm.value?.validate();
const rules = reactive<FormRules<typeof formData>>({
  name: [
    {
      required: true,
      message: "Please input Name and Surname",
      trigger: "change",
    },
    { min: 4, message: "Please input at min 4 characters", trigger: "change" },
    {
      max: 15,
      message: "Please input at max 15 characters",
      trigger: "change",
    },
  ],
  email: [
    { required: true, message: "Please input Email address", trigger: "change" },
    {
      type: "email",
      message: "Please input valid Email address",
      trigger: "change",
    },
  ],
  subject: [{ required: true, trigger: "change" }],
  description: [
    { required: true, trigger: "change" },
    {
      min: 20,
      message: "Please input at min 20 characters",
      trigger: "change",
    },
    {
      max: 200,
      message: "Please input at max 200 characters",
      trigger: "change",
    },
  ],
});
/////////////////////////////////////////////////////methods
const postForm = async () => {
  postingForm.value = true;
  try {
    await validateForm();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("description", formData.description);
    if (attachment?.value?.files?.[0])
      payload.append("attachment", attachment.value.files[0]);
    //call api
    const response = await postContactUsForm(payload);
    ElMessageBox.alert(response.data, "success");
    contactUsForm.value?.resetFields();
    attachment.value.value = null;
  } catch (error) {
    console.log("🚀 ~ postForm ~ error:", error);
  }
  postingForm.value = false;
};
</script>

<style lang="scss">
@import "~/assets/sass/pages/contact-us.scss";
</style>
