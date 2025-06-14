
const Header = (props) => {

	return (
		<div className="max-w-[90rem] mx-auto mt-20 py-5">
			<h1 className="text-6xl text-center font-bold mb-8">
				<div>Measuring the Validity of</div>
				<div>Clustering Validation Datasets</div>
			</h1>
			
			<div className="text-center mb-8">
				<h2 className="text-2xl font-medium mb-4">
					<a href="https://www.hyeonjeon.com/" className="text-blue-600 hover:underline">Hyeon Jeon</a><sup>1</sup>, 
					<span className="mx-2"><a href="https://about.me/michaelaupetit" className="text-blue-600 hover:underline">Michaël Aupetit</a></span><sup>2</sup>, 
					<span className="mx-2">DongHwa Shin</span><sup>3</sup>, 
					<span className="mx-2"><a href="https://aeri206.github.io/" className="text-blue-600 hover:underline">Aeri Cho</a></span><sup>1</sup>, 
					<span className="mx-2"><a href="https://seokhyeon.com/" className="text-blue-600 hover:underline">Seokhyeon Park</a></span><sup>1</sup>, 
					<span className="mx-2">and <a href="http://hcil.snu.ac.kr/people/jinwook-seo" className="text-blue-600 hover:underline">Jinwook Seo</a></span><sup>1</sup>
				</h2>
				<p className="text-lg text-gray-600 mb-2">
					<sup>1</sup>Seoul National University, <sup>2</sup>Qatar Computing Research Institute, <sup>3</sup>Kwangwoon University
				</p>
				<p className="text-xl font-semibold text-blue-800 mb-6">
					IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2025
				</p>
			</div>

			<div className="flex justify-center space-x-4 mb-10">
				<a href="https://arxiv.org/abs/2503.01097" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
					Paper (arXiv)
				</a>
				<a href="https://ieeexplore.ieee.org/document/10909451/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
					Paper (IEEE)
				</a>
				<a href="https://github.com/hj-n/pyivm" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
					Library
				</a>
				<a href="https://github.com/hj-n/clm" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
					Code
				</a>
				<a href="http://hyeonword.com/clm-datasets/" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
					Datasets
				</a>
			</div>

			<div className="w-4/5 mx-auto">
				<section className="mb-12">
					<p className="text-lg leading-relaxed text-gray-800 mb-4">
						Clustering techniques are often validated using benchmark datasets where class labels serve as ground-truth clusters. 
						However, <strong>class labels may not align with actual data clusters</strong>, and such misalignment hampers accurate validation. 
						We term this alignment as <em>cluster-label matching (CLM)</em> and emphasize the need to evaluate CLM to ensure reliable clustering validation.
					</p>
					<p className="text-lg leading-relaxed text-gray-800">
						We introduce <strong>Adjusted Internal Validation Measures (IVMs)</strong> as fast and reliable methods to evaluate and compare CLM across datasets. 
						We establish four axioms requiring validation measures to be independent of data properties not related to cluster structure 
						(e.g., dimensionality, dataset size), and develop standardized protocols to convert any IVM to satisfy these axioms.
					</p>
				</section>

				<section className="mb-12">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-blue-50 p-6 rounded-lg">
							<h4 className="text-xl font-semibold mb-3 text-blue-800">Cluster-Label Matching Problem</h4>
							<p className="text-gray-700">
								Identified and formalized the cluster-label matching (CLM) problem, demonstrating how misalignment 
								between class labels and actual clusters affects clustering validation.
							</p>
						</div>
						<div className="bg-green-50 p-6 rounded-lg">
							<h4 className="text-xl font-semibold mb-3 text-green-800">Four Axioms for Adjusted IVMs</h4>
							<p className="text-gray-700">
								Established four axioms for validation measures to be independent of non-cluster-related 
								data properties like dimensionality and dataset size.
							</p>
						</div>
						<div className="bg-purple-50 p-6 rounded-lg">
							<h4 className="text-xl font-semibold mb-3 text-purple-800">Adjusted IVMs</h4>
							<p className="text-gray-700">
								Developed standardized protocols to convert existing Internal Validation Measures (IVMs) 
								to satisfy the proposed axioms, creating "Adjusted IVMs".
							</p>
						</div>
						<div className="bg-orange-50 p-6 rounded-lg">
							<h4 className="text-xl font-semibold mb-3 text-orange-800">Empirical Validation</h4>
							<p className="text-gray-700">
								Demonstrated through extensive experiments that Adjusted IVMs outperform standard 
								validation methods in evaluating cluster-label matching across 96 benchmark datasets.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-12">
					<h3 className="text-3xl font-bold mb-6 text-center">Methodology</h3>
					<div className="bg-white p-8 rounded-lg mb-8">
						<div className="flex justify-center mb-8">
							<img 
								src=".//assets/methodology_flowchart.svg" 
								alt="Methodology flowchart for adjusted IVMs"
								className="max-w-full h-auto"
							/>
						</div>
					</div>
					
					<div className="bg-white">
						<h3 className="text-3xl font-bold mb-6 text-center">Comparison: Original vs. Adjusted Calinski-Harabasz Index</h3>
						<div className="flex justify-center mb-6">
							<img 
								src="./assets/comparison_ch_cha.png" 
								alt="Comparison between original and adjusted Calinski-Harabasz index"
								className="max-w-full h-auto"
								// make it 70% of width
								style={{ width: '70%' }}
							/>
						</div>
						<div className="text-lg leading-relaxed text-gray-700">
							<p className="mb-4">
								The figure above demonstrates the difference between the original and adjusted Calinski-Harabasz (CH) index. 
								<strong>The original CH index shows significant bias</strong> when comparing datasets with different properties, 
								making it unreliable for fair validation across diverse benchmark datasets.
							</p>
							<p>
								In contrast, <strong>our adjusted CH index eliminates these biases</strong>, providing consistent and fair 
								evaluation of cluster-label matching regardless of dataset dimensionality, size, scale, or density. 
								This fundamental improvement enables researchers to confidently compare clustering performance across 
								different benchmark datasets without being misled by dataset-specific artifacts.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-12">
					<h3 className="text-3xl font-bold mb-6 text-center">Supplemental Materials</h3>
					<p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
						We provide comprehensive supplementary materials to support reproducibility and facilitate further research in clustering validation.
					</p>
					
					<div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="bg-white border border-gray-200 p-6 rounded-lg">
							<h4 className="text-2xl font-semibold mb-4 text-orange-700">
								CLM-Scored Datasets
							</h4>
							<p className="text-gray-700 mb-4">
								96 publicly labeled datasets with corresponding CLM scoreFeatures include:
							</p>
							<a href="http://hyeonword.com/clm-datasets/" className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
								Browse Datasets
							</a>
							<div className="mt-3">
								<a href="https://github.com/hj-n/labeled-datasets" className="text-orange-600 hover:underline text-sm">
									Bulk Download Repository
								</a>
							</div>
						</div>

						<div className="bg-white border border-gray-200 p-6 rounded-lg">
							<h4 className="text-2xl font-semibold mb-4 text-purple-700">
								PyIVM Library (Recommended)
							</h4>
							<p className="text-gray-700 mb-4">
								A Python library for both adjusted and original internal validation measures. 
								This is the most up-to-date and reliable implementation. (Served via pip)
							</p>
							<a href="https://github.com/hj-n/pyivm" className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
								GitHub Repository
							</a>
							<div className="mt-3 text-sm text-gray-600">
								<code className="bg-gray-100 px-2 py-1 rounded">pip install pyivm</code>
							</div>
						</div>

						<div className="bg-white border border-gray-200 p-6 rounded-lg">
							<h4 className="text-2xl font-semibold mb-4 text-green-700">
								Paper Implementation (Legacy)
							</h4>
							<p className="text-gray-700 mb-4">
								Original implementation used for the paper at the time of publication. 
								Note: This version may contain some bugs and is kept for reproducibility:
							</p>
							<a href="https://github.com/hj-n/clm" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
								GitHub Repository
							</a>
						</div>
					</div>
				</section>

				<section className="mb-12">
					<h3 className="text-3xl font-bold mb-6 text-center">Citation</h3>
					<div className="bg-gray-100 p-6 rounded-lg">
						<pre className="text-sm overflow-x-auto">
{`@ARTICLE{10909451,
  author={Jeon, Hyeon and Aupetit, Michaël and Shin, DongHwa and Cho, Aeri and Park, Seokhyeon and Seo, Jinwook},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence}, 
  title={Measuring the Validity of Clustering Validation Datasets}, 
  year={2025},
  volume={47},
  number={6},
  pages={5045-5058},
  keywords={Reliability;Benchmark testing;Protocols;Training;Standards;Size measurement;Mutual information;Indexes;Electronic mail;Data mining;Clustering;clustering validation;internal clustering validation;external clustering validation;clustering benchmark},
  doi={10.1109/TPAMI.2025.3548011}
}`}
						</pre>
					</div>
				</section>

				<section className="mb-12 text-center">
					<h3 className="text-2xl font-semibold mb-4">Contact</h3>
					<p className="text-lg">
						For questions or issues with the materials provided, please contact us at{' '}
						<a href="mailto:hj@hcil.snu.ac.kr" className="text-blue-600 hover:underline font-semibold">
							hj@hcil.snu.ac.kr
						</a>
					</p>
				</section>
			</div>
		</div>
	)
};

export default Header;