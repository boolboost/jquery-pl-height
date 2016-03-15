$(window).load(function(){

			$('.product-list').map(function(){
				var el = $('>.row>[class^="col-"]', this);

				var heightMax = {}, i = 1;
				var count = el.size();

				var col = (
					$(this).is('[data-col]')
						? parseInt( $(this).data('col') )
						: 3
				);

				$(el).map(function () {
					var selects = [".title", ".price-list"];
					var $node = $(this);

					$( selects ).each(function (index, value) {
						var select = value;
						var $target = $(select, $node);
						heightMax[select] = (
							heightMax[select]
								? heightMax[select]
								: 0
						);

						if ( heightMax[select] < $target.height() ) {
							heightMax[select] = $target.height();
						}

						if (i%col==0 || i==count) {
							$target
								.add(
									$node.prevAll()
										.slice(0, (count%col && i%col? count%col: col) - 1)
										.find(select)
								)
								.height(heightMax[select]);

							heightMax[select] = 0;
						}
					});

					i++;
				});
			});

		});
