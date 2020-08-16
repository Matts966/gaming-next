export class ResizeUtil {
    compress (file:File, imageWidth:number, afterAction:(file:File)=>void) {
        var canvas = document.createElement("canvas")
        var ctx = canvas.getContext('2d')
        var image = new Image()

        canvas.width = 0
        canvas.height = 0

        image.src = URL.createObjectURL(file)
        image.onload = ()=> {
            if (image.width <= imageWidth) {
                afterAction(file)
            }

            var w = imageWidth
            var h = image.height * (imageWidth/image.width)

            canvas.width = w
            canvas.height = h

            ctx.drawImage(image, 0, 0, w, h)

            canvas.toBlob((blob) => {
                afterAction(new File([blob], file.name, { type: file.type }))
            })
        }
    }
}
