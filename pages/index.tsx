export default function Home() {
  return (
    <main >
      <BackgroundImages />
      <Footer />
    </main>
  );
}

export function BackgroundImages() {
  return (
    <div>
      <img
        className="w-100"
        src='/frivillige-skøyter/uni_helgeland.jpg'
        alt="RS 144 Uni Helgeland"
        />
      <img
        className="w-100"
        src='/frivillige-skøyter/bjarne_kyrkjebo.jpg'
        alt="RS 140 Bjarne Kyrkjebø"
        />
      <img
        className="w-100"
        src='/frivillige-skøyter/einar_staff.jpg'
        alt="RS 161 Einar Staff"
        />
      <img
        className="w-100"
        src='/frivillige-skøyter/elias.jpg'
        alt="RS 159 Elias"
        />
      <img
        className="w-100"
        src='/frivillige-skøyter/horn-stayer.jpg'
        alt="RS 166 Horn Stayer"
        />
      <img
        className="w-100"
        src='/frivillige-skøyter/une_amundsen.jpeg'
        alt="RS 129 Une Amundsen"
        />
      <img
        className="w-100"
        src='/frivillige-skøyter/mersk.jpg'
        alt="RS 141 Mærsk"
        />
    </div>
  );
}
export function Footer() {
  return (
    <footer className="w-100 bg-gray-900 p-4 flex flex-row space-e justify-around">
      <div className="flex flex-row">
        <a className="text-gray-100 text-2xl p-2 flex items-center" href="https://github.com/ohatland/rsrk.dev">Ønsker du å bidra?<img className="w-5 h-5 ml-2" src="/github-mark-white.svg" /></a>
      </div>
    </footer>
  );
}
