<template>
  <div class="change-password-container">
    <div class="change-password">
      <div class="form-header">
        <h2>ACCOUNT SETTINGS</h2>
        <p class="subtitle">Update your password to keep your account secure</p>
      </div>

      <form @submit.prevent="handleChangePassword" class="password-form">
        <div class="form-group">
          <label class="form-label">Current Password</label>
          <input
            type="password"
            v-model="oldPassword"
            required
            class="form-input"
            placeholder="Enter your current password"
          />
        </div>

        <div class="form-group">
          <label class="form-label">New Password</label>
          <input
            type="password"
            v-model="newPassword"
            required
            class="form-input"
            placeholder="Enter new password"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Confirm New Password</label>
          <input
            type="password"
            v-model="confirmNewPassword"
            required
            class="form-input"
            placeholder="Confirm your new password"
          />
        </div>

        <div class="button-group">
          <button type="submit" class="submit-btn primary">
            UPDATE PASSWORD
          </button>
          <button type="button" class="submit-btn secondary">CANCEL</button>
        </div>
      </form>

      <div class="message-container">
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const oldPassword = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");
const errorMessage = ref("");
const successMessage = ref("");

const handleChangePassword = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (newPassword.value !== confirmNewPassword.value) {
    errorMessage.value = "Mật khẩu mới không khớp!";
    return;
  }

  try {
    const userStr = localStorage.getItem("user");
    const user = JSON.parse(userStr);

    await axios.put(
      "https://api.cyberonegate.com/User/ChangePassword",
      {
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
        confirmNewPassword: confirmNewPassword.value,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    successMessage.value = "Đổi mật khẩu thành công!";
    oldPassword.value = "";
    newPassword.value = "";
    confirmNewPassword.value = "";
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || "Lỗi khi đổi mật khẩu!";
  }
};
</script>

<style scoped>
.change-password-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f6f3;
  padding: 40px 20px;
  font-family: "Arial", sans-serif;
}

.change-password {
  max-width: 480px;
  width: 100%;
  background: white;
  border-radius: 0;
  padding: 60px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e5e0;
}

.form-header {
  text-align: center;
  margin-bottom: 50px;
}

.form-header h2 {
  font-size: 24px;
  font-weight: 400;
  color: #6b7c3e;
  margin-bottom: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.subtitle {
  color: #8a8a8a;
  font-size: 14px;
  margin: 0;
  font-weight: 300;
  line-height: 1.5;
}

.password-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 400;
  color: #333;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  font-size: 15px;
  background: transparent;
  box-sizing: border-box;
  transition: all 0.3s ease;
  color: #333;
}

.form-input:focus {
  outline: none;
  border-bottom-color: #6b7c3e;
  background: transparent;
}

.form-input::placeholder {
  color: #999;
  font-style: italic;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.submit-btn {
  flex: 1;
  padding: 15px 25px;
  border: 1px solid #6b7c3e;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: transparent;
}

.submit-btn.primary {
  background: #6b7c3e;
  color: white;
}

.submit-btn.primary:hover {
  background: #5a6835;
  transform: translateY(-1px);
}

.submit-btn.secondary {
  background: transparent;
  color: #6b7c3e;
}

.submit-btn.secondary:hover {
  background: #6b7c3e;
  color: white;
}

.message-container {
  margin-top: 30px;
}

.error-message,
.success-message {
  padding: 15px 20px;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  border-radius: 0;
  animation: fadeIn 0.3s ease;
}

.error-message {
  background: #fdf2f2;
  color: #c53030;
  border: 1px solid #fed7d7;
}

.success-message {
  background: #f0fff4;
  color: #38a169;
  border: 1px solid #c6f6d5;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .change-password-container {
    padding: 20px 15px;
  }

  .change-password {
    padding: 40px 30px;
  }

  .form-header h2 {
    font-size: 20px;
  }

  .button-group {
    flex-direction: column;
  }
}
</style>
