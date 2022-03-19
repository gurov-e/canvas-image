const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')
const pi = Math.PI;

(() => {
  function resizeCanvas() {
    cnv.width = innerWidth
    cnv.height = innerHeight
  }
  window.addEventListener('resize', () => {
    resizeCanvas()
    drawContext()
  })
  window.addEventListener('load', () => {
    resizeCanvas()
    drawContext()
  })

})()

function drawContext() {
  //крайняя левая полуокружность.
  ctx.beginPath()
  ctx.save()
  ctx.translate(50, 50)
  ctx.scale(0.5, 1)
  ctx.arc(270, 200, 75, 8, pi, false)
  ctx.lineWidth = 1.5
  ctx.strokeStyle = 'white'
  ctx.stroke()
  ctx.restore()
  ctx.closePath()

  //объем ручки. левая полуокружность.
  ctx.beginPath()
  ctx.save()
  ctx.translate(50, 50)
  ctx.scale(0.5, 1)
  ctx.arc(280, 210, 50, 8, pi, false)
  ctx.lineWidth = 1.5
  ctx.strokeStyle = 'white'
  ctx.stroke()
  ctx.restore()

  //объем ручки. верхяя ручка рукоятки.
  ctx.beginPath()
  ctx.rect(167, 261, 269, 0.2)
  ctx.strokeStyle = 'white'
  ctx.stroke()

  //объем ручки. нижняя ручка рукоятки.
  ctx.beginPath()
  ctx.rect(188, 309.7, 246, 0.2)
  ctx.stroke()

  //объем ручки. правый край.
  ctx.beginPath()
  ctx.rect(435, 262, 1, 48)
  ctx.stroke()

  //верхняя ручка рукоятки.
  ctx.beginPath()
  ctx.rect(148, 250, 199, 0.2)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 1
  ctx.stroke()
  ctx.rect(400, 250, 50, 0.2)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 1
  ctx.stroke()

  //нижняя ручка рукоятки.
  ctx.beginPath()
  ctx.rect(180, 323.25, 27, 1)
  ctx.lineWidth = 1
  ctx.stroke()
  ctx.beginPath()
  ctx.rect(430, 317.25, 19, 1)
  ctx.stroke()

  //левый край перекрестия.
  ctx.beginPath()
  ctx.rect(450, 227, 1, 120)
  ctx.stroke()

  //верхний край перекрестия.
  ctx.beginPath()
  ctx.rect(452, 227, 15, 1)
  ctx.stroke()

  //нижний край перекрестия.
  ctx.beginPath()
  ctx.rect(452, 346, 15, 1)
  ctx.stroke()

  //правый край перекрестия.
  ctx.beginPath()
  ctx.rect(468, 227, 1, 120)
  ctx.stroke()

  //верхний край лезвия.
  ctx.beginPath()
  ctx.rect(565, 250, 359.5, 0.2)
  ctx.strokeStyle = 'white'
  ctx.stroke()

  //объем лезвия. верхний край.
  ctx.beginPath()
  ctx.rect(565, 263, 345, 0.2)
  ctx.stroke()

  //зарубки.
  ctx.beginPath()
  ctx.rect(470, 250, 15, 1)
  ctx.moveTo(485, 250)
  ctx.lineTo(495, 230)
  ctx.moveTo(505, 250)
  ctx.lineTo(495, 230)
  ctx.moveTo(505, 250)
  ctx.lineTo(515, 230)
  ctx.moveTo(525, 250)
  ctx.lineTo(515, 230)
  ctx.moveTo(525, 250)
  ctx.lineTo(535, 230)
  ctx.moveTo(545, 250)
  ctx.lineTo(535, 230)
  ctx.moveTo(545, 250)
  ctx.lineTo(555, 230)
  ctx.moveTo(565, 250)
  ctx.lineTo(555, 230)

  ctx.rect(470, 263, 94, 0.2)
  ctx.lineWidth = 0.7
  ctx.stroke()

  //нижний край лезвия.
  ctx.beginPath()
  ctx.rect(470, 323.5, 400, 0.2)
  ctx.strokeStyle = 'white'
  ctx.stroke()

  //объем лезвия. нижний край.
  ctx.beginPath()
  ctx.rect(470, 309.7, 400, 0.2)
  ctx.stroke()

  //ребро жесткости.
  ctx.beginPath()
  ctx.rect(470, 287, 410, 1)
  ctx.lineWidth = 1
  ctx.stroke()

  //острие.
  ctx.beginPath()
  ctx.save()
  ctx.translate(10, 20)
  ctx.scale(1.5, 1)
  ctx.arc(573, 229, 75, 0, pi / 2, false)
  ctx.lineWidth = 1
  ctx.stroke()
  ctx.restore()
  ctx.rotate(-0.3)

  //1488.
  ctx.beginPath()
  ctx.font = "18px Georgia"
  ctx.strokeText("1488", 150, 360)

  //крюк.
  ctx.beginPath()
  ctx.translate(30, 120)
  ctx.rotate(0.5)
  ctx.arc(885, -114, 85, -4.55, pi / 3, true)
  ctx.lineWidth = 1
  ctx.stroke()

  //место для большого пальца.
  ctx.beginPath()
  ctx.translate(30, 120)
  // ctx.rotate(.4)
  ctx.arc(288, -119, 85, -4.55, pi / 3, true)
  ctx.lineWidth = 1.5
  ctx.stroke()

  //место для мизинца.
  ctx.beginPath()
  ctx.translate(300, 120)
  ctx.rotate(3.1)
  ctx.arc(101, -13, 85, -4.55, pi / 3, true)
  ctx.lineWidth = 1.5
  ctx.stroke()

  //место для безымянного.
  ctx.beginPath()
  ctx.translate(10, 200)
  ctx.rotate(-0.01)
  ctx.arc(-70, -183, 85, -4.55, pi / 3, true)
  ctx.lineWidth = 1.5
  ctx.stroke()

  //место для среднего.
  ctx.beginPath()
  ctx.translate(10, 200)
  ctx.rotate(-0.01)
  ctx.arc(30, -402, 85, -4.55, pi / 3, true)
  ctx.lineWidth = 1.5
  ctx.stroke()

  //место для указательного
  ctx.beginPath()
  ctx.translate(10, 200)
  ctx.rotate(0.0001)
  ctx.arc(-34, -593, 85, -4.55, pi / 3, true)
  ctx.lineWidth = 1.5
  ctx.stroke()
}