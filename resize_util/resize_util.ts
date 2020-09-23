export class ResizeUtil {
    compress (file:File, maxWidthOrHeight:number, afterAction:(file:File)=>void) {
        var canvas = document.createElement("canvas")
        var ctx = canvas.getContext('2d')
        var image = new Image()

        canvas.width = 0
        canvas.height = 0

        image.src = URL.createObjectURL(file)
        image.onload = ()=> {
            if (image.width <= maxWidthOrHeight && image.height <= maxWidthOrHeight) {
                afterAction(file)
                return;
            }

            var w:number;
            var h:number;
            if (image.width > image.height) {
                var w = maxWidthOrHeight
                var h = image.height * (maxWidthOrHeight/image.width)
            } else {
                var h = maxWidthOrHeight
                var w = image.width * (maxWidthOrHeight/image.height)
            }

            canvas.width = w
            canvas.height = h

            console.log(`image resized from h: ${image.height}, w: ${image.width} to h: ${h}, w: ${w}`)

            ctx.drawImage(image, 0, 0, w, h)

            canvas.toBlob((blob) => {
                afterAction(new File([blob], file.name, { type: file.type }))
            })
        }
    }
}
