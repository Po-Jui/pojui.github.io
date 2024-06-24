<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Form @submit="onSubmit" v-slot="{ errors, values, validate }">
      {{ errors }} {{ values }}
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          rules="email|required"
          placeholder="請輸入 Email"
          :class="{ 'is-invalid': errors['email'] }"
          v-model="user.email"
        >
        </Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          placeholder="請輸入姓名"
          :rules="isChinese"
          v-model="user.name"
          :class="{ 'is-invalid': errors['姓名'] }"
        >
        </Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">電話</label>
        <Field
          id="phone"
          name="電話"
          type="text"
          class="form-control"
          :rules="isPhone"
          placeholder="請輸入電話"
          v-model="user.phone"
          :class="{ 'is-invalid': errors['電話'] }"
        >
        </Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="region" class="form-label">地區</label>
        <select id="region" name="地區" class="form-control">
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
          <option value="台南市">台南市</option>
        </select>
        <span class="invalid-feedback"></span>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <input
          id="address"
          name="地址"
          type="text"
          class="form-control"
          placeholder="請輸入地址"
        />
        <span class="invalid-feedback"></span>
      </div>

      <button
        class="btn me-2 btn-outline-primary"
        type="button"
        @click="validate"
      >
        驗證
      </button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: {
        email: "",
        name: "",
        address: "",
        phone: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    isChinese(value) {
      const chinese = /^[\u4E00-\u9FA5]+$/;
      return chinese.test(value) ? true : "需要輸入中文姓名";
    },
  },
  created() {
    console.log(this);
  },
};
</script>
