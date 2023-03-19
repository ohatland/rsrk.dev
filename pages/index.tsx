export default function Home() {
  return (
      <main>
        <h1 className="text-3xl font-bold">Hello RSRK</h1>
        <Footer />
      </main>
  )
}
export function Footer() {
  return (
    <footer className="w-100 bg-gray-900 p-4 flex flex-row space-e justify-around">
      <div className="flex flex-row">
        <a className="text-gray-100 text-2xl p-2 flex items-center" href="https://github.com/ohatland/rsrk.dev">Ønsker du å bidra?<img className="w-5 h-5 ml-2" src="/github-mark-white.svg"/></a>
      </div>
    </footer>
  )
}
