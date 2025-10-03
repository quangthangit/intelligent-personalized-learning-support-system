export function FooterLinks() {
  return (
    <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-1">
      <p>Bằng việc đăng nhập, bạn đồng ý với</p>
      <p>
        <a href="#" className="text-teal-600 hover:underline">
          Điều khoản dịch vụ
        </a>
        {" và "}
        <a href="#" className="text-teal-600 hover:underline">
          Chính sách bảo mật
        </a>
      </p>
    </div>
  )
}