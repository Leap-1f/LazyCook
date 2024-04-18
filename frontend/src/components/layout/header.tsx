export default function Header() {
  return (
    <div className="flex items-center justify-around h-16 bg-white w-full">
      <h1 className="text-3xl font-bold">LazyCook</h1>
      {/* this is the link list */}
      <div className="flex items-center justify-center gap-5">
        <a>Home</a>
        <a>Register</a>
      </div>
    </div>
  );
}
