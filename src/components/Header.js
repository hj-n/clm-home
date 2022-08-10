
const Header = (props) => {

	return (
		<div className="max-w-[90rem] mx-auto mt-20 py-5">
			<h2 className="text-5xl text-center font-bold">Sanity Check for External Clustering Validation Benchmarks <br /> using Internal Validation Measures</h2>
			<h3 className="text-center font-medium text-2xl my-10">Project Webpage</h3>
			<p className="w-3/5 mx-auto leading-relaxed">
				Here, we provide a link to the diverse supplementary material that we have developed for the project.
				The materials are organized in three parts: 
				(1) datasets with a corresponding CLM score computed by between-dataset Calinski-Harabasz index,  
				(2) a GitHub repository containing the implementation of the within- and between-dataset Calinski-Harabasz index, and 
				(3) a GitHub repository containing the codes to reproduce the experiments conducted on the paper. 
			</p>
			<p className="w-3/5 mx-auto leading-relaxed mt-2">
				If you have any trouble utilizing the materials provided, please contact us at <a href="mailto:hj@hcil.snu.ac.kr" className="text-sky-600 hover:underline">hj@hcil.snu.ac.kr</a>.
			</p>
			
			<p className="w-3/5 mx-auto leading-relaxed mt-6">
				<h4 className="font-medium text-xl my-2">1. Datasets with CLM Scores (<a href="http://hyeonword.com/clm-datasets/" className="text-sky-600 hover:underline">Link</a>)</h4>
				The website provides the 96 publicly available datasets with a corresponding CLM score and a download link to the dataset. We also provided the CLM rank of datasets,
				along with a brushable chart that enables quick filtering of the datasets based on their CLM score. Entire datasets are in both compressed (.bin) and NumPy (.npy) formats.
				To download entire datasets at once, refer to <a href="https://github.com/hj-n/labeled-datasets" className="text-sky-600 hover:underline">our dataset repository</a>.
			</p>
			<p className="w-3/5 mx-auto leading-relaxed mt-6">
				<h4 className="font-medium text-xl my-2"> 2. Implementation of Between-dataset Calinski-Harabasz Index (<a href="https://github.com/hj-n/btw-dataset-internal-measures" className="text-sky-600 hover:underline">Link</a>)</h4>
				The above link connects to the GitHub repository containing the implementation of the between-dataset Calinski-Harabasz index.
				We packaged the implementation as a python package named 'btwim' (Abbreviation of between-dataset internal validation measure) served via PyPI.
				You can apply the proposed measure by just installing and importing the package. Detailed Instructions are provided in README.

			</p>
			<p className="w-3/5 mx-auto leading-relaxed mt-6">
				<h4 className="font-medium text-xl my-2">3. Codes for Reproducing Experiments (<a href="https://github.com/hj-n/clm" className="text-sky-600 hover:underline">Link</a>)</h4>
				We provide a GitHub repository containing the codes to reproduce the experiments of the paper.
				The ways to run the codes and reproduce the results are described in the README.
			</p>
			<p className="w-3/5 mx-auto leading-relaxed mt-10"></p>
			<br/>
			<br/>
			<br/>
		</div>
	)
};

export default Header;