'use client'

import React, { useState } from 'react'

export default function EcommercePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // Gửi form data tại đây
  }

  return (
    <main className="main page-inland">
      {/* Hero Banner */}
      <section className="bn-big white">
        <div className="bn-big-bg">
          <img 
            width="2000" 
            height="1000" 
            src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/tmdt1-min.jpg" 
            alt="E-commerce"
            className="w-full h-auto"
          />
        </div>
        
        <div className="container">
          <div className="bn-big-ctn">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <ul className="breadcrumb-list flex gap-4">
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/solutions">Giải pháp</a></li>
                <li><a href="/solutions/ecommerce">Thương mại điện tử Quốc tế</a></li>
              </ul>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-6">
              Giải pháp <br />
              Thương mại điện tử quốc tế
            </h1>

            {/* Description */}
            <p className="text-lg mb-8">
              Cung cấp giải pháp toàn diện từ khâu lấy hàng, xử lý hàng hóa, đóng <br />
              gói đến giao hàng đích danh tại các quốc gia trên thế giới.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold">150<span className="text-2xl">+</span></div>
                <p>Tấn hàng mỗi tháng được xử lý và giao hàng Quốc tế.</p>
              </div>
              <div>
                <div className="text-4xl font-bold">99<span className="text-2xl">%</span></div>
                <p>Lô hàng được giao hàng theo đúng cam kết.</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: 'ic-bn1.svg', title: 'Tăng cơ hội bán hàng ở các thị trường quốc tế.' },
                { icon: 'ic-bn2.svg', title: 'Tiết kiệm chi phí nhờ quy trình tối ưu hoá.' },
                { icon: 'ic-bn3.svg', title: 'Đảm bảo sự hài lòng với dịch vụ đáng tin cậy.' },
                { icon: 'ic-bn4.svg', title: 'Sự an toàn và bảo mật của khách hàng là ưu tiên hàng đầu.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <img 
                    src={`https://vietnampostlogistics.com/wp-content/uploads/2025/03/${feature.icon}`}
                    alt={feature.title}
                    width="24"
                    height="24"
                  />
                  <p className="text-sm">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Details Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-8">Cung cấp giải pháp toàn diện</h2>

          {/* Filter Buttons */}
          <div className="flex gap-4 mb-8 overflow-x-auto">
            {['Việt Nam - Mỹ', 'Việt Nam - Châu Âu', 'Việt Nam - Canada', 'Việt Nam – Úc', 'Trung Quốc – Việt Nam'].map((route) => (
              <button key={route} className="px-6 py-2 border rounded-lg whitespace-nowrap hover:bg-gray-100">
                {route}
              </button>
            ))}
          </div>

          <p className="text-center mb-12 max-w-2xl mx-auto">
            <strong>Cung cấp giải pháp toàn diện từ khâu lấy hàng, xử lý hàng hóa, đóng gói đến giao hàng đích danh tại các quốc gia trên thế giới.</strong>
            <br /><br />
            Chúng tôi kết hợp với các hàng không hàng đầu thế giới để vận chuyển hàng hóa từ Việt Nam đi khắp thế giới, đặc biệt là Korean Air.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Vận chuyển qua hình thức T11/T01', img: 'storage1.jpg' },
              { title: 'Vận chuyến qua các đơn vị chuyển phát nhanh toàn cầu FEDEX/UPS/DHL', img: 'storage2.jpg' },
              { title: 'Vận chuyển qua hình thức ECCF.', img: 'storage3.jpg' }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={`https://vietnampostlogistics.com/wp-content/uploads/2025/03/${service.img}`}
                  alt={service.title}
                  width="286"
                  height="346"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Kinh nghiệm sâu rộng trên các sàn TMĐT</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            Chúng tôi có kinh nghiệm sâu rộng trong việc quản lý và vận chuyển hàng hóa cho nhiều sàn thương mại điện tử xuyên Quốc gia lớn trên Thế giới như:
          </p>

          {/* Brands Carousel */}
          <div className="grid grid-cols-6 gap-4">
            {['br1.jpg', 'br2.jpg', 'br3.jpg', 'br4.jpg', 'br5.jpg', 'br6.jpg'].map((brand, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg">
                <img 
                  src={`https://vietnampostlogistics.com/wp-content/uploads/2025/03/${brand}`}
                  alt={`Brand ${idx + 1}`}
                  width="182"
                  height="116"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Giải pháp toàn diện dành cho</h2>

          <div className="grid grid-cols-2 gap-8">
            {[
              'Các doanh nghiệp sản xuất tại Việt Nam muốn đưa hàng hóa ra thế giới.',
              'Doanh nghiệp thương mại điện tử quy mô vừa và lớn.',
              'Các cá nhân, doanh nghiệp có nhu cầu vận chuyển hàng hóa từ Trung Quốc về Việt Nam.',
              'Các cá nhân bán hàng trên nền tảng e-commerce như Amazon, eBay, Etsy tại thị trường Châu Mỹ & Châu Âu.'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-2xl">★</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Ưu điểm của giải pháp</h2>

          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Giao hàng nhanh chóng', desc: 'Thời gian giao hàng nhanh chóng nhờ mạng lưới vận chuyển trên toàn cầu.' },
              { title: 'Hỗ trợ hải quan', desc: 'Hỗ trợ khai báo hải quan và chính sách thuế tối ưu.' },
              { title: 'Linh hoạt mọi quy mô', desc: 'Đáp ứng linh hoạt với nhiều quy mô lô hàng khác nhau.' },
              { title: 'Hợp tác cùng đối tác lớn', desc: 'Hợp tác với các đơn vị chuyển phát nhanh uy tín nhất như FEDEX, UPS, DHL.' },
              { title: 'Hệ thống quản lý tập trung', desc: 'Sở hữu hệ thống quản lý tập trung giúp nhà bán hàng quản lý tracking.' },
              { title: 'Đội ngũ nhân viên chuyên nghiệp', desc: 'Đội ngũ nhân viên chuyên nghiệp, sẵn sàng hỗ trợ khách hàng 24/7.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container">
          <h3 className="text-2xl font-bold text-center mb-8">
            Chúng tôi luôn sẵn sàng đem đến cho khách hàng những <span className="text-blue-600">giải pháp hoàn hảo</span> nhất
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-4 text-left">Hạng mục</th>
                  <th className="border p-4 text-left">Ưu điểm</th>
                  <th className="border p-4 text-left">Lợi ích cho khách hàng</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: 'Giá', advantage: 'Cạnh tranh', benefit: 'Tiết kiệm chi phí cho khách hàng.' },
                  { category: 'Thời gian giao', advantage: 'Tốc độ nhanh nhất thị trường (5-7days)', benefit: 'Đảm bảo việc kinh doanh của khách trơn tru.' },
                  { category: 'Tem nhãn', advantage: 'Tem chuẩn Global Direct Entry của USPS', benefit: 'Tỉ lệ 100% phát hàng thành công.' },
                  { category: 'Tải bay', advantage: 'Đối tác chính thức của nhiều hãng hàng không lớn', benefit: 'Đảm bảo tải bay ngay cả trong mùa cao điểm.' }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border p-4">{row.category}</td>
                    <td className="border p-4">{row.advantage}</td>
                    <td className="border p-4">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Liên hệ với Vietnam Post Logistics</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nhập Tên của bạn"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded text-black"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Tên công ty"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded text-black"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded text-black"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-bold"
                >
                  Liên hệ tư vấn →
                </button>
              </form>
            </div>

            <div className="flex items-center justify-center">
              <img 
                src="https://vietnampostlogistics.com/wp-content/uploads/2025/03/fly.png"
                alt="Logistics"
                width="400"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}