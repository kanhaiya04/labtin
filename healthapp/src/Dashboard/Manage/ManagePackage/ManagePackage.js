import React, { useEffect } from 'react'
import AddPackage from './AddPackage'
import PackageRow from './PackageRow'
import '../../../App.css'
import './ManagePackage.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPackages } from '../../../actions/packageActions'

const ManagePackage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isLoading, packageList } = useSelector((state) => state.packages)
  console.log(packageList)

  useEffect(() => {
    dispatch(getPackages())
  }, [dispatch])
  const packager = [
    {
      _id: 1,
      title: 'packages 1',
      details:
        'details details details details details details details details details details details details details details',
      parameters: 90,
      originalPrice: 100,
      discountPrice: 50,
    },
    {
      _id: 2,
      title: 'packages 2',
      details:
        'details details details details details details details details details details details details details details',
      parameters: 90,
      originalPrice: 100,
      discountPrice: 50,
    },
    {
      _id: 3,
      title: 'packages 3',
      details:
        'details details details details details details details details details details details details details details',
      parameters: 90,
      originalPrice: 100,
      discountPrice: 50,
    },
    {
      _id: 4,
      title: 'packages 4',
      details:
        'details details details details details details details details details details details details details details',
      parameters: 90,
      originalPrice: 100,
      discountPrice: 50,
    },
    {
      _id: 5,
      title: 'packages 5',
      details:
        'details details details details details details details details details details details details details details',
      parameters: 90,
      originalPrice: 100,
      discountPrice: 50,
    },
  ]

  return (
    <div className='manage-package'>
      {/* <AddPackage /> */}
      <p className='btn-container'>
        <button
          onClick={() => navigate('/dashboard/addPackage')}
          className='add-btn'
        >
          + Add Package
        </button>
      </p>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Parameters</th>
              <th>Original Price</th>
              <th>Discount Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packageList &&
              packageList.map((singlePackage) => (
                <PackageRow singlePackage={singlePackage} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagePackage
