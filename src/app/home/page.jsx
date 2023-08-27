import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from "./home.module.css";
import Image from 'next/image';
import Link from "next/link";


const ITEMS = [

  {
    src: "/sample.jpg",
    date: "2015/11/11",
    id: 0
  },
  {
    src: "/sample2.jpg",
    date: "2015/11/11",
    id: 1
  },
  {
    src: "/sample3.jpg",
    date: "2015/11/11",
    id: 2
  },
  {
    src: "/sample4.jpg",
    date: "2015/11/11",
    id: 3
  },

];

export default function Home() {
  return (
    <>
      <Header />
      
      <main className={styles.flame}>
        <div className={styles.grid}>

          {ITEMS.map((item) => {
            const index = Math.floor(Math.random() * 8) + 1;
            return (
              <Link href='/postDetails'>
                <div key={item.id} className={styles[`square${index}`]} >
                  <Image src="/pin.png" alt="pin" width="40" height="40" className={styles.pin} />
                  <Image src={item.src} alt="photo" width="0" height="0" sizes="100vw" className={styles.photo} />
                  <div className={styles.date}>
                    {item.date}
                  </div>
                </div>
              </Link>
            );

          })}

        </div>
      </main>

      <Footer />
    </>
  )
}
