import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000)
  }, [])

  return (
    <div>
      <h1 className="title-not-found" >Oppsss..</h1>
      <h1 className="title-not-found" >Halaman yang anda cari tidak di temukan</h1>
    </div>
  )
}
