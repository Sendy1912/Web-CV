import { useState } from 'react'
import './App.css'
import foto from './assets/foto.jpeg'

import fotografiProduk from './assets/fotografi-produk.svg'
import fotografi from './assets/fotografi.svg'
import desain3D from './assets/3d.svg'
import desain2D from './assets/2d.svg'

function App() {

  // ================= STATE =================

  const [task, setTask] = useState('')
  const [date, setDate] = useState('')
  const [tasks, setTasks] = useState([])

  // ================= TANGGAL HARI INI =================

  const today = new Date().toISOString().split('T')[0]

  // ================= TAMBAH TUGAS =================

  const addTask = () => {

    if (task === '' || date === '') {
      alert('Isi nama tugas dan tanggal!')
      return
    }

    // VALIDASI DEADLINE
    if (date < today) {
      alert('Deadline sudah lewat!')
      return
    }

    const newTask = {
      id: Date.now(),
      taskName: task,
      taskDate: date
    }

    setTasks([...tasks, newTask])

    setTask('')
    setDate('')
  }

  // ================= HAPUS TUGAS =================

  const deleteTask = (id) => {

    const filteredTask = tasks.filter(
      (item) => item.id !== id
    )

    setTasks(filteredTask)
  }

  return (

    <div>

      {/* ================= NAVBAR ================= */}

      <nav>

        <ul>

          <li>
            <a href="#tentang">Tentang Saya</a>
          </li>

          <li>
            <a href="#kemampuan">Kemampuan</a>
          </li>

          <li>
            <a href="#pengalaman">Pengalaman</a>
          </li>

          <li>
            <a href="#hobi">Hobi</a>
          </li>

          <li>
            <a href="#motivasi">Motivasi</a>
          </li>

          <li>
            <a href="#kontak">Kontak</a>
          </li>

          <li>
            <a href="#portofolio">Portofolio</a>
          </li>

          <li>
            <a href="#tugas">List Tugas</a>
          </li>

        </ul>

      </nav>

      {/* ================= HERO ================= */}

      <header className="hero">

        <img
          src={foto}
          alt="Profile"
          className="profile-img"
        />

        <h1>
          SENDI VELLYA DESTIANI
        </h1>

        <p>
          Mahasiswa
        </p>

        <small>
          Departemen Teknologi Multimedia Kreatif
        </small>

      </header>

      {/* ================= TENTANG ================= */}

      <section className="card" id="tentang">

        <h2>
          Tentang Saya
        </h2>

        <p>
          Mahasiswa semester empat angkatan 2024 Program Studi
          Departemen Teknologi Multimedia Kreatif, Politeknik
          Elektronika Negeri Surabaya. Memiliki kemampuan
          komunikasi yang baik, mudah beradaptasi, dan mampu
          bekerja secara kolaboratif dalam tim. Individu yang
          antusias serta berkomitmen untuk memberikan dampak
          positif di bidang teknologi kreatif dan digital,
          khususnya dalam pengembangan multimedia dan website.
          Aktif mengembangkan keterampilan serta memperluas
          wawasan dalam bidang teknologi informasi, desain
          digital, dan media interaktif.
        </p>

      </section>

      {/* ================= KEMAMPUAN ================= */}

      <section className="card" id="kemampuan">

        <h2>
          Kemampuan
        </h2>

        <table>

          <thead>

            <tr>

              <th>
                Kategori
              </th>

              <th>
                Kemampuan
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>
                Kompetensi Multimedia
              </td>

              <td>

                <ul>

                  <li>Video Editing</li>

                  <li>Photography</li>

                  <li>Graphic Design</li>

                  <li>Videography</li>

                </ul>

              </td>

            </tr>

            <tr>

              <td>
                3D &amp; Interactive Media
              </td>

              <td>

                <ul>

                  <li>3D Modeling</li>

                  <li>Animasi 2D</li>

                  <li>Unity</li>

                </ul>

              </td>

            </tr>

            <tr>

              <td>
                Multimedia Software
              </td>

              <td>

                <ul>

                  <li>Unity</li>

                  <li>Blender</li>

                  <li>Figma</li>

                  <li>Canva</li>

                  <li>VS Code</li>

                </ul>

              </td>

            </tr>

          </tbody>

        </table>

      </section>

      {/* ================= PENGALAMAN ================= */}

      <section className="card" id="pengalaman">

        <h2>
          Pengalaman
        </h2>

        <ul>

          <li>
            Membantu proses pengambilan foto
          </li>

          <li>
            Membantu mengatur lighting
          </li>

          <li>
            Melayani kebutuhan dokumentasi
          </li>

          <li>
            Campers di mata kuliah Studio TV 1
          </li>

          <li>
            Technical Director di mata kuliah Studio TV 2
          </li>

        </ul>

      </section>

      {/* ================= HOBI ================= */}

      <section className="card" id="hobi">

        <h2>
          Hobi
        </h2>

        <p>
          Saya memiliki hobi bermain badminton, memotret,
          dan melakukan healing atau eksplorasi tempat baru.
          Bermain badminton membantu saya menjaga kesehatan,
          melatih disiplin, serta meningkatkan kemampuan kerja
          sama dan sportivitas. Selain itu, saya juga menyukai
          kegiatan memotret karena dapat mengembangkan kreativitas
          dan ketelitian dalam melihat detail dari setiap momen.
          Saya juga senang melakukan healing untuk menyegarkan
          pikiran, mencari suasana baru, dan mendapatkan inspirasi
          yang dapat mendukung aktivitas sehari-hari maupun
          pengembangan diri.
        </p>

      </section>

      {/* ================= MOTIVASI ================= */}

      <section className="card" id="motivasi">

        <h2>
          Motivasi
        </h2>

        <p>
          Kegagalanmu hari ini bukanlah akhir dari perjalanan,
          melainkan bagian penting dari proses menuju kesuksesan
          di masa depan. Setiap kesalahan akan mengajarkanmu hal
          baru, membuatmu lebih kuat, lebih sabar, dan lebih
          bijaksana dalam melangkah.
        </p>

      </section>

      {/* ================= KONTAK ================= */}

      <section className="card" id="kontak">

        <h2>
          Kontak
        </h2>

        <p>
          Email : sendivellya@gmail.com
        </p>

        <p>
          HP : 0881-0354-85363
        </p>

        <p>
          Instagram : @vllyds
        </p>

      </section>

      {/* ================= PORTOFOLIO ================= */}

      <section className="card" id="portofolio">

        <h2>
          Portofolio
        </h2>

        <div className="portfolio-grid">

          <div className="portfolio-item">
            <img
              src={fotografiProduk}
              alt="Fotografi Produk"
            />
            <h3>Fotografi Produk</h3>
            <p>
              Foto produk yang dibuat pada semester 2 dengan
              menggunakan pengaturan lighting untuk menghasilkan
              pencahayaan yang lebih menarik dan profesional.
            </p>
          </div>

          <div className="portfolio-item">
            <img
              src={fotografi}
              alt="Fotografi"
            />
            <h3>Fotografi</h3>
            <p>
              Hasil fotografi yang dibuat pada mata kuliah fotografi di
              semester 2 dengan menerapkan komposisi, pencahayaan, dan pengaturan
              kamera yang sesuai.
            </p>
          </div>

          <div className="portfolio-item">
            <img
              src={desain3D}
              alt="3D Modeling"
            />
            <h3>3D Modeling</h3>
            <p>
              Model 3D yang dibuat menggunakan Blender dengan
              menerapkan teknik modeling dasar dan pencahayaan 3D.
            </p>
          </div>

          <div className="portfolio-item">
            <img
              src={desain2D}
              alt="Desain 2D"
            />
            <h3>Desain 2D</h3>
            <p>
              Desain karakter 2D yang dibuat sebagai latihan
              ilustrasi digital dan pengembangan kreativitas visual.
            </p>
          </div>

        </div>

      </section>

      {/* ================= LIST TUGAS ================= */}

      <section className="card" id="tugas">

        <h2>
          List Tugas
        </h2>

        <input
          type="text"
          placeholder="Nama Tugas"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addTask}>
          Tambah Tugas
        </button>

        <ul id="taskList">

          {tasks
            .filter((item) => item.taskDate >= today)
            .map((item) => (

              <li key={item.id}>

                <div className="task-info">

                  <strong>
                    {item.taskName}
                  </strong>

                  <p>
                    Deadline : {item.taskDate}
                  </p>

                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(item.id)}
                >
                  Hapus
                </button>

              </li>

            ))}

        </ul>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Sendi Vellya Destiani
        </p>

      </footer>

    </div>

  )
}

export default App
