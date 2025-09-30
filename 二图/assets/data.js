// 数据与搜索
const sampleBooks = [
	{
		id: '1',
		title: '深入理解计算机系统',
		author: 'Randal E. Bryant',
		price: 58,
		cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
		condition: '良好',
		campus: '海淀校区',
		description: '经典 CS 基础教材，笔记干净，封面轻微磨损。'
	},
	{
		id: '2',
		title: '算法导论',
		author: 'Thomas H. Cormen',
		price: 66,
		cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
		condition: '九成新',
		campus: '昌平校区',
		description: '少量铅笔标注，几乎全新。'
	},
	{
		id: '3',
		title: '操作系统概念',
		author: 'Abraham Silberschatz',
		price: 45,
		cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
		condition: '可用',
		campus: '五道口',
		description: '封面折痕明显，但不影响阅读。'
	},
	{
		id: '4',
		title: '计算机网络：自顶向下方法',
		author: 'James F. Kurose',
		price: 52,
		cover: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=800&auto=format&fit=crop',
		condition: '良好',
		campus: '海淀校区',
		description: '内页干净，书脊完好。'
	}
];

function searchBooks(keyword) {
	const k = String(keyword || '').trim().toLowerCase();
	if (!k) return sampleBooks;
	return sampleBooks.filter(b =>
		b.title.toLowerCase().includes(k) ||
		b.author.toLowerCase().includes(k) ||
		b.campus.toLowerCase().includes(k)
	);
}// JavaScript source code
