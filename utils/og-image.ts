import { Post } from './posts'
import { source } from '@cloudinary/url-gen/actions/overlay'
import { Position } from '@cloudinary/url-gen/qualifiers'
import { center } from '@cloudinary/url-gen/qualifiers/compass'
import { compass } from '@cloudinary/url-gen/qualifiers/gravity'
import { text } from '@cloudinary/url-gen/qualifiers/source'
import { TextFitQualifier } from '@cloudinary/url-gen/qualifiers/textFit'
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle'
import { cloudinary } from './cloudinary'

export function createOgImageUrl(post: Post): string {
    const image = cloudinary.image('blank.png')

    image.overlay(
        source(
            text(post.title, new TextStyle('Cairo', 48))
                .textFit(new TextFitQualifier(840))
                .textColor('BLACK'),
        ).position(new Position().gravity(compass(center())).offsetX(0).offsetY(0)),
    )

    return image.toURL()
}
