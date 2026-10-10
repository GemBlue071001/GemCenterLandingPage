import { useState, type FormEvent } from "react";
import { submitRegistration } from "../../api/registration";
import "./RegistrationForm.css";

export function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitRegistration({
        fullName: String(formData.get("fullName") ?? ""),
        company: String(formData.get("company") ?? ""),
        position: String(formData.get("position") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="registration-card" id="dang-ky" onSubmit={handleSubmit}>
      <div className="registration-heading">
        <h2>Đăng ký tham dự</h2>
        <p>Trở thành một phần của hành trình tiên phong</p>
      </div>

      <div className="form-fields">
        <label>
          <span className="sr-only">Họ và tên</span>
          <input name="fullName" placeholder="Họ và tên *" autoComplete="name" required />
        </label>
        <label>
          <span className="sr-only">Công ty hoặc tổ chức</span>
          <input name="company" placeholder="Công ty / Tổ chức *" autoComplete="organization" required />
        </label>
        <label>
          <span className="sr-only">Chức danh</span>
          <input name="position" placeholder="Chức danh" autoComplete="organization-title" />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input name="email" type="email" placeholder="Email *" autoComplete="email" required />
        </label>
        <label>
          <span className="sr-only">Số điện thoại</span>
          <input name="phone" type="tel" placeholder="Số điện thoại *" autoComplete="tel" required />
        </label>
      </div>

      <button className="submit-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Đang gửi..." : "Đăng ký ngay"}
      </button>

      <p className={`form-status form-status--${status}`} role="status" aria-live="polite">
        {status === "success" && "Đăng ký thành công. Cảm ơn bạn đã quan tâm!"}
        {status === "error" && "Không thể gửi đăng ký lúc này. Vui lòng thử lại."}
      </p>
    </form>
  );
}
