export function Header() {
  return (
    <header className="flex justify-between bg-[#28c6ff]">
      <a href="/create-user"><img src="https://placehold.co/50x50/blue/white" alt="placeholder"/>Create a user account.</a>
      <a href="/"><p>CheckPoint</p></a>
      <nav>
        <ul>
          <li><a href="" className="m-5">Option 1</a></li>
          <li><a href="" className="m-5">Option 2</a></li>
          <li><a href="" className="m-5">Option 3</a></li>
        </ul>
      </nav>
    </header>
  )
}

