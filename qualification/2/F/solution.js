module.exports = function (data) {

	function sortGoods(goods) {
		if (goods == null) return;

		goods.sort(function(a,b) {
			let nameA = a.name;
			let nameB = b.name;

			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
	}

	function sortComments(comments) {
		if (comments == null) return;

		comments.sort(function(a,b) {
			let textA = a.text;
			let textB = b.text;

			if (textA < textB) {
				return -1;
			}
			if (textA > textB) {
				return 1;
			}
			return 0;
		});
	}

	function formCommentText(comment, level) {
		let output = ' '.repeat(level*2)+"- "+ comment.text;
		if (level == 0) {
			output += " - про " + comment.parent.name;
		}
		output += "\n";

		let newLevel = ++level;

		sortComments(comment.comments);

		for (let item of comment.comments) {
			output += formCommentText(item, newLevel);
		}

		return output;
	}


	// Markdown generation

	// find the first good
	let tdata = data;

	while (tdata.type == "comment" && tdata.parent != null) {
		tdata = tdata.parent;	
	}

	let comments = "## Отзывы\n\n";
	let goods = "## Товары\n\n";

	// the current tdata type is good
	let allgoods = [];
	allgoods.push(tdata);

	for (let good of allgoods) {
		for (let item of good.related) {
			if (!allgoods.includes(item)) {
				allgoods.push(item);
			}
		}
	}

	sortGoods(allgoods);

	for (let item of allgoods) {
		goods += "- " + item.name + "\n";
		sortGoods(item.related);

		for (let item2 of item.related) {
			goods += "  * " + item2.name + "\n";
		}

	}

	//generate comments
	let firstComments = [];
	for (let good of allgoods) {
		firstComments = firstComments.concat(good.comments);	
	}

	sortComments(firstComments);

	for (let item of firstComments) {
		comments += formCommentText(item, 0);
	}

	comments += "\n";
	return comments + goods;
}
