/**
 * Created by Toha on 20.04.2017.
 */
import tinymce from 'tinymce/tinymce';
// A theme is also required
import 'tinymce/themes/modern/theme';

import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/table';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/save';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/template';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/lineheight';

/* for lineheightselect

 https://github.com/castler/tinymce-line-height-plugin

 */


class TinyMce {
    static init(id, onChange) {
        tinymce.init(
            {
                selector: `#${id}`,
                height: 300,
                theme: 'modern',
                plugins: [
                    'advlist autolink lists link image charmap preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc lineheight'
                ],
                toolbar: 'fontselect fontsizeselect lineheightselect undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image preview media | forecolor backcolor emoticons | codesample',
                font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
                fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                lineheight_formats: "6pt 8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 36pt",
                setup (editor) {
                    editor.on('change', (e) => {
                        let content = TinyMce.getContent(e.target.id);
                        onChange(content);
                    });
                }
            }
        );
    }

    static destroy(id) {
        tinymce.get(id).destroy();
    }

    static getContent(id) {
        return tinymce.get(id).getContent();
    }

    static setContent(id, content) {
        return tinymce.get(id).setContent(content);
    }
}
export default TinyMce;