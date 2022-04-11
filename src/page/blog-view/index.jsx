import './index.css'

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function BlogView() {
	const params = useParams();
	const [metadata, setMetadata] = useState(null);

	useEffect(() => {
		fetch(`/posts/blog/${params.id}/metadata.json`)
  			.then(response => response.json())
			.then(json => setMetadata(json));
	}, [params.id]);

	const coverUrl = `/posts/blog/${params.id}/cover.png`;
	const created = metadata ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }
			).format(new Date(metadata.created)) : 'Loading...';
	const coverStyle = { backgroundImage: `url('${coverUrl}')` };

	return (
		<div className='blog-view'>
			<div className='blog-view-cover'>
				<div className='blog-view-cover-image' style={ coverStyle } />
				<div className='blog-view-cover-overlay' />
			</div>
			<div className='blog-view-info'>
				<p className='blog-view-info-title'>{ metadata ? metadata.title : 'Loading...' }</p>
				<p className='blog-view-info-description'>{ metadata ? metadata.description : 'Loading...' }</p>
				<p className='blog-view-info-meta'><i className='blog-view-info-meta-symbol fa-solid fa-calendar' /> &nbsp; { created }</p>
			</div>
			<div className='blog-view-display'>
				<div className='blog-view-display-content'>
					

	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl metus, placerat ut sollicitudin eu, tristique quis orci. Proin et tempor lorem, id aliquet mauris. Aliquam efficitur nulla dui, id vestibulum nisl maximus sit amet. Nullam sed mollis libero. Vivamus scelerisque tempor ante, ut finibus tellus fermentum gravida. Pellentesque nisl quam, molestie non lacinia non, consequat non dui. Fusce blandit velit eget quam pulvinar convallis. Maecenas eu dapibus metus. Etiam purus velit, pulvinar eget ultricies eget, egestas in urna. Aenean tincidunt euismod orci et posuere. Ut odio arcu, iaculis sit amet fringilla eu, dapibus cursus urna. Praesent ut egestas nisi, ac placerat arcu. Nam viverra ac mi at placerat. Nullam suscipit condimentum lacus non venenatis. Nunc mattis non nulla nec iaculis.

	Nulla interdum blandit ante, ut vehicula ex maximus sit amet. Donec scelerisque ante massa, eu suscipit lorem rutrum maximus. Fusce eu ligula sapien. Donec eget mauris ipsum. Vestibulum in ipsum nulla. Curabitur aliquam ante in pulvinar convallis. Donec non quam eget nulla varius convallis non at nibh. Fusce id venenatis eros. Duis eget tincidunt ligula.

	Fusce orci sapien, elementum quis mattis non, sagittis id neque. Aenean a lectus metus. Suspendisse mattis tincidunt luctus. Donec nunc felis, malesuada eu dignissim vel, laoreet quis dui. Suspendisse at est odio. Ut laoreet ligula vitae dolor sagittis laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis blandit vestibulum purus, consequat tincidunt diam semper eget. Curabitur placerat ex eget venenatis mollis. Mauris euismod justo non metus facilisis, quis mattis velit dapibus. Vestibulum tincidunt mauris non augue posuere, ac eleifend nibh vehicula. Donec at volutpat justo.

	Integer et urna pretium, auctor dolor eget, tincidunt ante. Nullam semper ut lectus et condimentum. Nunc et massa ac nisi vehicula suscipit ut mollis erat. Nunc mauris sem, ullamcorper nec luctus in, vehicula nec leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. In euismod malesuada mauris, eget maximus massa venenatis id. Mauris vestibulum, urna in iaculis dictum, ante urna luctus lectus, at faucibus ex leo et orci. In non tincidunt sapien. Sed posuere, augue id ornare gravida, ante urna blandit nisi, nec faucibus sem arcu et justo. Cras sed ultrices lacus. Proin cursus nibh eget augue dictum, sodales fermentum sapien elementum. Sed leo tortor, suscipit quis justo sed, ullamcorper aliquet justo. Ut vulputate diam sapien, at ullamcorper lorem dapibus sagittis. Integer dapibus ultricies elit eu vestibulum.

	Duis eu nisl orci. Aliquam erat volutpat. Sed consequat, orci id tincidunt tempor, arcu sem dignissim tortor, quis condimentum nunc lorem vel urna. Curabitur urna arcu, tristique a maximus nec, rhoncus eu ipsum. Nulla et orci et diam venenatis accumsan. Integer vel suscipit mauris. Nullam laoreet ut sapien ut gravida. Etiam pulvinar, massa eu ultrices commodo, tellus lacus dictum nunc, et congue enim massa nec eros. Quisque nulla diam, interdum ac mi eget, eleifend maximus nunc. Maecenas quis urna eget nulla eleifend auctor quis id tellus. Integer nec eros eget dolor semper imperdiet. Duis et porta justo. Suspendisse potenti.

	Quisque non maximus justo. Phasellus ex massa, auctor in scelerisque et, dignissim eu dui. Nulla dignissim, lacus ac porttitor blandit, risus nisl molestie neque, non iaculis diam lorem et risus. Praesent feugiat eros nunc, eu suscipit purus sodales sed. Phasellus at blandit magna. Pellentesque ligula turpis, semper sit amet tellus quis, porta pellentesque lorem. Quisque ut turpis sem. Suspendisse molestie fringilla pharetra. Mauris rhoncus venenatis mauris id commodo. Proin eget lectus ut velit porta fermentum. Aliquam ac ullamcorper ipsum. Quisque semper nisi non tempor porttitor. Integer vitae molestie dolor. Quisque sodales justo id augue rhoncus commodo. Vestibulum ac ligula aliquet, condimentum magna eu, pretium nisi. Suspendisse interdum nibh ultrices metus elementum fringilla.

	In aliquam ipsum vitae nisi vehicula, quis auctor sapien vehicula. In faucibus nisl tempor, tempor enim at, dignissim dolor. Phasellus ornare metus ac felis fringilla, non pharetra massa ultricies. Maecenas facilisis nisi in enim sagittis, non accumsan quam efficitur. Aliquam ut mauris id ex placerat dictum sit amet sit amet lacus. Sed condimentum turpis leo, et rutrum leo elementum ac. In id blandit justo, a aliquam velit. Nulla nec nisl eget ex gravida consectetur a consectetur est. Praesent luctus ante quis magna ornare euismod.

	Aliquam malesuada, quam id bibendum porta, velit dolor tempus dolor, nec varius justo metus vel diam. Etiam malesuada in ex vitae semper. Suspendisse leo purus, malesuada eu urna et, maximus vulputate felis. Duis aliquet arcu dolor, convallis ornare elit tempus ac. Donec auctor urna id velit sodales finibus. Cras eu congue lectus. Morbi aliquam eros quis nisi varius, nec pretium enim pellentesque. Maecenas massa libero, pretium in efficitur a, luctus ac lacus.

	In rhoncus lectus elit, et imperdiet metus semper at. Curabitur turpis diam, dapibus a mi at, posuere imperdiet lorem. Integer sagittis arcu eget luctus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam laoreet fermentum congue. Aenean luctus sagittis placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dolor lectus, tristique eget mattis hendrerit, aliquam nec lorem. Vestibulum fermentum mollis odio, sit amet posuere tortor lobortis a. Vestibulum id enim elementum, ornare urna et, rhoncus diam. Nam at feugiat sem.

	Vestibulum euismod varius orci a cursus. Suspendisse tincidunt ullamcorper leo, sit amet faucibus lectus commodo porttitor. Integer mi erat, aliquam id diam ac, eleifend aliquet dolor. Nam massa arcu, posuere vitae rutrum sed, mattis auctor mi. Morbi ornare neque eu dui ultricies blandit. Praesent accumsan dolor sit amet bibendum placerat. Maecenas dapibus velit vel elit finibus cursus. Proin tincidunt nulla et finibus iaculis. Vestibulum eget purus dolor. Vivamus aliquam augue eget mi commodo lobortis.

	Nullam posuere porttitor nulla, sit amet finibus elit fermentum vitae. Mauris malesuada imperdiet libero nec viverra. Sed dolor nunc, sodales id suscipit sit amet, varius vitae diam. Phasellus vestibulum luctus lorem, in convallis enim viverra sit amet. Integer ac purus molestie, bibendum elit a, scelerisque lacus. Nullam pellentesque ornare enim vitae porttitor. Aenean et consectetur libero.

	Sed imperdiet vulputate ante sed congue. Vivamus vehicula sapien eros. Cras a nisi tellus. Integer rhoncus risus nulla, at fringilla nisl tristique in. Proin a pharetra risus, ut fermentum lacus. Donec nec nisl sit amet est elementum egestas ut ut ipsum. Suspendisse consequat facilisis nisi, quis vehicula magna commodo quis. Suspendisse potenti. Donec lobortis nulla ac tristique vulputate. Proin ac bibendum mauris. Ut neque odio, auctor nec lorem fermentum, euismod convallis lorem. Morbi eu tortor placerat, auctor dui in, sodales ligula. Duis in sem eros. Donec ac elit porttitor, vehicula magna quis, aliquam sem. Donec interdum odio eu mauris bibendum, nec pharetra ligula mollis.

	Maecenas velit libero, ornare ac tortor nec, laoreet dignissim erat. Praesent turpis tellus, sagittis a venenatis a, euismod iaculis sapien. Vestibulum sit amet cursus neque. Mauris sollicitudin ipsum diam, posuere sodales orci ornare a. Praesent placerat porta nulla vitae suscipit. Mauris eget ullamcorper odio. Integer nec rutrum ligula. Suspendisse mattis in sapien et ullamcorper. Curabitur tempus sapien sit amet ultrices vestibulum. Integer diam diam, euismod sed odio dapibus, rhoncus fermentum diam. Maecenas feugiat elementum bibendum. Nam nisi sem, lacinia ut hendrerit vel, euismod id massa. Nulla facilisi. Duis tristique, libero sed bibendum lacinia, lacus diam cursus risus, eu aliquam nibh quam a augue. Nullam malesuada interdum velit, vitae faucibus nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

	Nulla tempus eros interdum dui aliquet, et tincidunt elit sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin a malesuada nunc, a finibus ligula. Integer viverra vitae mi at bibendum. In hac habitasse platea dictumst. Vestibulum vel mi facilisis, vehicula neque a, accumsan lacus. Aliquam a cursus elit. Fusce porta convallis lectus gravida vehicula.

	Phasellus vulputate facilisis semper. Pellentesque turpis quam, vulputate in sagittis vel, consectetur non sapien. Duis et ipsum ornare, aliquet enim eget, volutpat dolor. Morbi ultricies risus non risus porttitor, ut pretium ante eleifend. In a ipsum faucibus, tempor mauris sed, vulputate lorem. Phasellus vel enim fermentum, malesuada ipsum in, malesuada sem. Nulla et neque ante. Suspendisse vitae massa eget neque eleifend semper nec sit amet lorem. Vivamus convallis interdum arcu in aliquam. Vestibulum ut diam sollicitudin dolor fringilla rhoncus ut a libero.

	Nam sed nisi et sapien rhoncus malesuada. Cras in viverra nibh, nec ultricies sapien. Ut ante metus, faucibus quis ornare eu, mattis eget lorem. Donec tincidunt urna nec metus ultricies, ut aliquet eros posuere. Aliquam fermentum tempor nunc, nec varius risus sollicitudin ut. Nullam ac rutrum ligula, vel placerat mauris. Sed non tempus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

	Mauris porttitor varius commodo. Sed leo nibh, posuere sed feugiat eu, mollis at arcu. Integer non ultricies tortor. Ut id egestas ipsum. Aenean ac tristique elit. Sed euismod mauris volutpat, euismod risus vel, dignissim nunc. Sed non libero ac purus imperdiet viverra. Quisque sapien metus, tincidunt quis orci ac, lacinia feugiat odio. Integer id ex eu augue dignissim ornare. Proin blandit diam eu magna pulvinar, a pharetra dolor pharetra.

	Maecenas condimentum malesuada porta. Maecenas lacinia condimentum est, vel aliquam libero tincidunt placerat. Sed vitae vulputate eros. Aenean massa ligula, ultrices sed blandit sit amet, aliquet id dui. Quisque in efficitur nisi. Duis vitae semper neque. Fusce viverra sed libero ac fermentum. Etiam eu mi nunc. Duis quam sem, rutrum ut eros ac, viverra fermentum purus.

	Maecenas sollicitudin est ac nibh feugiat placerat. Aenean nibh dolor, rhoncus ut ipsum non, varius eleifend tellus. Aliquam egestas fringilla libero vel elementum. Suspendisse volutpat leo neque, sit amet tempor massa viverra in. Nulla consectetur pulvinar ex, quis tempor dolor consequat et. Maecenas posuere malesuada ante, vel congue ipsum. Etiam porta erat a fermentum tincidunt. Vivamus bibendum sapien a faucibus sollicitudin.

	Fusce efficitur ante vitae orci scelerisque, sit amet scelerisque magna placerat. Nullam augue risus, sodales luctus fringilla in, molestie ut libero. Morbi vitae leo et dui feugiat finibus et a libero. Nunc sit amet lacus ultricies, feugiat tortor id, dapibus tellus. Maecenas mattis lectus sed lacinia consequat. Suspendisse placerat, est sed dignissim lobortis, neque massa porta purus, pellentesque interdum lorem enim non mauris. Aliquam consequat, sapien eu lobortis bibendum, ipsum dolor maximus tortor, nec suscipit magna lacus ac est. Maecenas augue risus, suscipit at aliquet quis, luctus in ex. Donec vitae feugiat sapien. Nunc dui quam, tempus sit amet nibh sit amet, consequat ornare quam. Fusce pharetra, risus eu consequat porta, odio nibh maximus sem, id vulputate dolor nibh sed tellus. Curabitur dictum sapien in porttitor dapibus. Integer eu viverra elit, id malesuada sapien. Duis a vehicula arcu, et sollicitudin ante. 
				</div>
			</div>
		</div>
	);
}
