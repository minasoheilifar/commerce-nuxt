<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12">
        <div class="row px-md-5 px-4 py-4 formBox">
          <div class="col-12 col-md-7">
            <div>
              <h4>Send tickets to support</h4>
            </div>
            <el-form
              ref="ruleFormRef"
              style="max-width: 600px"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="auto"
              class="demo-ruleForm"
              label-position="left"
              size="large"
            >
              <div class="row my-4">
                <div class="col-12 col-lg-6">
                  <el-form-item label="Name and Surname" prop="name" required>
                    <el-input v-model="ruleForm.name" :prefix-icon="User" />
                  </el-form-item>
                </div>
                <div class="col-12 col-lg-6">
                  <el-form-item label="Email" prop="email" required>
                    <el-input v-model="ruleForm.email" :prefix-icon="Message" />
                  </el-form-item>
                </div>
                <div class="col-12">
                  <el-form-item label="Subject" prop="subject" required>
                    <el-select
                      v-model="ruleForm.subject"
                      placeholder="Please select the subject"
                    >
                      <template #prefix>
                        <span
                          ><el-icon><EditPen /></el-icon
                        ></span>
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
                  <el-form-item label="Description" prop="desc" required>
                    <el-input
                      v-model="ruleForm.desc"
                      type="textarea"
                      placeholder="Write your description"
                    />
                  </el-form-item>
                </div>
                <div class="col-12"></div>
                <div class="col-12">
                  <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                      Submit
                    </el-button>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </div>
          <div
            class="col-12 col-md-5 d-flex align-items-md-center justify-content-center contactUsImageBox"
          >
            <img src="/images/contactUs.png" class="contactUsImage" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  ComponentSize,
  FormProps,
  FormInstance,
  FormRules,
} from "element-plus";
import { User, Message, EditPen } from "@element-plus/icons-vue";

const ruleFormRef = ref<FormInstance>();
/////////////
const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input Name and Surname"));
  } else {
    if (ruleForm.name !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("name");
    }
    callback();
  }
};
const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input Email address"));
  } else {
    if (ruleForm.email !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("email");
    }
    callback();
  }
};
const checkSubject = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please choose the ticket Subject"));
  } else {
    if (ruleForm.subject !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("subject");
    }
    callback();
  }
};
const validateDesc = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input Description"));
  } else if (value.length < 30) {
    callback(new Error("Please input at least 30 characters"));
  } else {
    if (ruleForm.desc !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("desc");
    }
    callback();
  }
};
//////
const ruleForm = reactive({
  name: "",
  email: "",
  subject: "",
  desc: "",
  attachment: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ validator: validateName, trigger: "blur" }],
  email: [{ validator: validateEmail, trigger: "blur" }],
  subject: [{ validator: checkSubject, trigger: "blur" }],
  desc: [{ validator: validateDesc, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
    }
  });
};
</script>

<style lang="scss">
@import "~/assets/sass/pages/contact-us.scss";
</style>
