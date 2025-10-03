export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4 text-center">
      <p className="text-sm font-medium">
        🎓 Spring Semester: New courses launching May 15th!{" "}
        <a
          href="#"
          className="underline underline-offset-4 hover:no-underline text-teal-100 hover:text-white"
        >
          Register now
        </a>
      </p>
    </div>
  );
}
