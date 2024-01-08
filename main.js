var images = ['img\\InuDressed.png', 'img\\Inu.png', 'img\\InuNaked.png'],
                i = 0;

            // preload
            for (var j=images.length; j--;) {
                var img = new Image();
                img.src = images[j];
            }

            // event handler
            document.getElementById('dressed').addEventListener('click', function() {
                this.src = images[i >= images.length - 1 ? i = 0 : ++i];
            }, false);
