from setuptools import setup, find_packages

setup(
    name='apiverve_zipdemographics',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='ZIP Demographics is a demographic data API for any US ZIP code, built on the US Census American Community Survey. Every plan gets total population and median household income, while paid plans add age, per-capita income, education, housing, employment, and racial composition.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/zipdemographics?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
